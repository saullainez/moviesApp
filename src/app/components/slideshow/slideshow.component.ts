import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/now-playing-response';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[];

  constructor() { 
    
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
    });

  }

  ngOnInit(): void {
    console.log(this.movies);
  }

}