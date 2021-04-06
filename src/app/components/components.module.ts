import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [NavbarComponent, SlideshowComponent, PeliculasPosterGridComponent],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGridComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    RatingModule, 
    PipesModule
  ]
})
export class ComponentsModule { }
