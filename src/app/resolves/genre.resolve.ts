import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { GenreService } from '../services/genre.service';

@Injectable({ providedIn: 'root' })
export class GenreResolve implements Resolve<any> {

  constructor(private _service: GenreService) { }

  resolve() {
    return this._service.getGenre(1)
  }

}