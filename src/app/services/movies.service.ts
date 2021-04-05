import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NowPlayingResponse } from '../interfaces/now-playing-response';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;

  constructor( private http: HttpClient ) { }

  get params(){
    return {
      api_key: 'f04258c07a90ab3e10392c5704fedfb3',
      language: 'es-Es',
      page: this.carteleraPage.toString()
    }
  }

  getNowPlaying():Observable<NowPlayingResponse>{
    return this.http.get<NowPlayingResponse>(`${this.baseUrl}/movie/now_playing`, {params : this.params}).pipe(
      tap(() => {
        this.carteleraPage += 1;
      })
    )
  }
}
