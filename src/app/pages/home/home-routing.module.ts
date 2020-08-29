import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MovieResolve } from '../../resolves/movie.resolve';
import { GenreResolve } from '../../resolves/genre.resolve';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      movies: MovieResolve,
      genre: GenreResolve,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
