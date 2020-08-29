import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { movie as MovieModel, genre as GenreModel } from '../models/movie.model';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(
    private _http: HttpClient
  ) { }

  getGenre(page: number): Observable<GenreModel[]> {
    return this._http.get(`${environment.apiUrl}/genre/movie/list?${environment.apiKey}&page=${page}&language=pt-br`)
      .pipe(
        map((res: any) => {
          return res.genres
        })
      )
  }

  search(idGenre: number[], page: number): Observable<MovieModel[]> {
    return this._http.get(`${environment.apiUrl}/discover/movie?${environment.apiKey}&with_genres=${idGenre}&page=${page}&language=pt-br`)
      .pipe(
        map((res: any) => {
          return res
        }),
      )
  }
}