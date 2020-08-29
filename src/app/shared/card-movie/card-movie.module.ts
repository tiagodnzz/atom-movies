import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMovieComponent } from './card-movie.component';

@NgModule({
  declarations: [CardMovieComponent],
  imports: [
    CommonModule
  ],
  exports: [CardMovieComponent]
})
export class CardMovieModule { }
