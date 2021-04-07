import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie, NowPlayingResponse } from '../interfaces/now-playing-response';
import { catchError, map, tap } from 'rxjs/operators';
import { MovieResponse } from '../interfaces/movie-response';
import { Cast, CreditsResponse } from '../interfaces/credits-resposne';

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

  searchMovie(text:string): Observable<Movie[]>{
    const params = {...this.params, page:'1', query: text};
    return this.http.get<NowPlayingResponse>(`${this.baseUrl}/search/movie`, {
      params
    }).pipe(map(resp => resp.results))
  }

  resertCarteleraPage(){
    this.carteleraPage = 1;
  }

  getMovieDetails(id: string){
    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/${id}`, {params: this.params}).pipe(
      catchError(err => of(null))
    );
  }

  getCast(id:string):Observable<Cast[]>{
    return this.http.get<CreditsResponse>(`${this.baseUrl}/movie/${id}/credits`, {params: this.params}).pipe(map(resp => resp.cast)).pipe(
      catchError(err => of([]))
    );
  }
}
