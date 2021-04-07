import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast } from 'src/app/interfaces/credits-resposne';
import { MovieResponse } from 'src/app/interfaces/movie-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: MovieResponse;
  cast: Cast[];

  constructor(private activatedRoute: ActivatedRoute, private movieService: MoviesService,
              private location: Location, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.movieService.getMovieDetails(id).subscribe(movie => {
      if(!movie){
        this.router.navigateByUrl('/home');
      }
      this.movie = movie;
    });
    this.movieService.getCast(id).subscribe(cast => {
      this.cast = cast;
    })
  }

  back(){
    this.location.back();
  }

}
