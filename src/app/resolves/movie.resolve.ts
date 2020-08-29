import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { MovieService } from '../services/movies.service';

@Injectable({ providedIn: 'root' })
export class MovieResolve implements Resolve<any> {

  constructor(private _service: MovieService) { }

  resolve() {
    return this._service.getAll(1)
  }

}