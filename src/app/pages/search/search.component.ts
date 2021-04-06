import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/now-playing-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movieSearch: string = '';
  movies: Movie[] = [];

  constructor(private activatedRoute: ActivatedRoute, private movieSevice: MoviesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.movieSearch = params.text;
      this.movieSevice.searchMovie(this.movieSearch).subscribe(movies => {
        this.movies = movies;
      })
    })
  }

}
