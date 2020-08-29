import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCastComponent } from './card-cast.component';



@NgModule({
  declarations: [CardCastComponent],
  imports: [
    CommonModule
  ],
  exports: [CardCastComponent]
})
export class CardCastModule { }
