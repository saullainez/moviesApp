import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private movieSevice: MoviesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.text);
      this.movieSevice.searchMovie(params.text).subscribe(movies => {
        console.log(movies);
      })
    })
  }

}
