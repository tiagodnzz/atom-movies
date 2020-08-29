import { Component, OnInit, Input } from '@angular/core';
import { movie as MovieModel } from 'src/app/models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent implements OnInit {

  @Input() movieItem: MovieModel

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  handleNavigateToDetails(id: number) {
    this._router.navigateByUrl(`details/${id}`)
  }

}
