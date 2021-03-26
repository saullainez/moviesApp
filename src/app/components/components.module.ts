import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';


@NgModule({
  declarations: [NavbarComponent, SlideshowComponent],
  exports: [
    NavbarComponent,
    SlideshowComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule
  ]
})
export class ComponentsModule { }
