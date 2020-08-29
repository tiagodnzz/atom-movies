import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule} from 'ngx-pagination';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardMovieModule } from '../../shared/card-movie/card-movie.module';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardMovieModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class HomeModule { }
