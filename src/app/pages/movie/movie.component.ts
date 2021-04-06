import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieResponse } from 'src/app/interfaces/movie-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: MovieResponse;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MoviesService,
              private location: Location) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.movieService.getMovieDetails(id).subscribe(movie => {
      this.movie = movie;
      console.log(this.movie);
    })
  }

  back(){
    this.location.back();
  }

}
