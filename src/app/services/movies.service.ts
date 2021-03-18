import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NowPlayingResponse } from '../interfaces/now-playing-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient ) { }

  getNowPlaying():Observable<NowPlayingResponse>{
    return this.http.get<NowPlayingResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=f04258c07a90ab3e10392c5704fedfb3&language=en-US&page=1');
  }
}
