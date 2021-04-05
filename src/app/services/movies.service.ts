import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie, NowPlayingResponse } from '../interfaces/now-playing-response';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando = false;

  constructor( private http: HttpClient ) { }

  get params(){
    return {
      api_key: 'f04258c07a90ab3e10392c5704fedfb3',
      language: 'es-Es',
      page: this.carteleraPage.toString()
    }
  }

  getNowPlaying():Observable<Movie[]>{
    if(this.cargando){
      return of([]);
    }
    this.cargando = true;
    return this.http.get<NowPlayingResponse>(`${this.baseUrl}/movie/now_playing`, {params : this.params}).pipe(
      map((resp) =>  resp.results),
      tap(() => {
        this.carteleraPage += 1;
        this.cargando = false;
      })
    )
  }
}
