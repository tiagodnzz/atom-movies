import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';

import { CardCastModule } from '../../shared/card-cast/card-cast.module';
import { CardCrewModule } from '../../shared/card-crew/card-crew.module'


@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    CardCastModule,
    CardCrewModule
  ]
})
export class DetailsModule { }
