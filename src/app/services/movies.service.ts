import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { movie as MovieModel, responseCasts as ResponseCastsModel } from '../models/movie.model';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private _http: HttpClient
  ) { }

  getAll(page: number): Observable<MovieModel[]> {
    return this._http.get(`${environment.apiUrl}/discover/movie?${environment.apiKey}&page=${page}&language=pt-br`)
      .pipe(
        map((res: any) => {
          return res
        }),
      )
  }

  getByPk(id: number): Observable<MovieModel> {
    return this._http.get(`${environment.apiUrl}/movie/${id}?${environment.apiKey}&language=pt-br`)
      .pipe(
        map((res: any) => {
          return res
        }),
      )
  }

  getCast(idMovie: number): Observable<ResponseCastsModel> {
    return this._http.get(`${environment.apiUrl}/movie/${idMovie}/credits?${environment.apiKey}`)
      .pipe(
        map((res: any) => {
          return res
        })
      )
  }

  search(nameMovie: string): Observable<MovieModel[]> {
    return this._http.get(`${environment.apiUrl}/search/movie?${environment.apiKey}&language=pt-br&query=${nameMovie}`)
      .pipe(
        map((res: any) => {
          return res
        }),
      )
  }
}