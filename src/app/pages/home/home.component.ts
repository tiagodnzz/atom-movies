import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movie as MovieModel, genre as GenreModel } from '../../models/movie.model';
import { MovieService } from 'src/app/services/movies.service';
import { GenreService } from 'src/app/services/genre.service';
import { LoadingService } from 'src/app/shared/loading/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: MovieModel[];
  oldMovies: MovieModel[];
  totalMovies: number;
  genres: GenreModel[];
  selectedGenre: number[] = [];
  searchInput = '';
  page: number = 1;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _serviceMovie: MovieService,
    private _serviceGenre: GenreService,
    private _loading: LoadingService
  ) { }

  ngOnInit(): void {
    this._loading.start()
    this.movies = this._activatedRoute.snapshot.data.movies['results'];
    this.oldMovies = this.movies;
    this.totalMovies = this._activatedRoute.snapshot.data.movies['total_results']
    this.genres = this._activatedRoute.snapshot.data.genre;
  }

  ngAfterViewInit() {
    this._loading.stop()
  }

  handleSearchMovie() {
    if (this.searchInput === '') {
      this.movies = this.oldMovies;
    }

    if (this.searchInput) {
      this._serviceMovie.search(this.searchInput).subscribe(response => {
        this.movies = response['results']
      })
    }
  }

  handleSelectedToGenre(id: number) {
    const alreadySelected = this.selectedGenre.findIndex((item) => item === id);

    if (alreadySelected >= 0) {
      const filteredGenre = this.selectedGenre.filter((item) => item !== id);
      this.selectedGenre = filteredGenre;
    } else {
      this.selectedGenre = [...this.selectedGenre, id];
    }

    if (!this.selectedGenre) {
      this.movies = this.oldMovies;
    } else {
      this._serviceGenre.search(this.selectedGenre, 1).subscribe((res: any) => {
        this.movies = res.results
      });
    }

  }

  activatedGenre(id: number) {
    return {
      'badge-active': this.selectedGenre.includes(id),
    }
  }

  handlePageChanged(page: any) {
    console.log(page);
    window.scrollTo({
      top: 120,
      left: 0,
      behavior: 'smooth'
    });
    this._serviceMovie.getAll(page).subscribe(response => {
      /***** Populando dois arrays porque se ele pesquisar algo, ele não perde o conteudo atual *****/
      this.movies = response['results']
      this.oldMovies = response['results']
    })
  }

}
