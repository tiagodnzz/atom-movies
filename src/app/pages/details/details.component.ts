import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movies.service';
import { movie as MovieModel, cast as CastsModel, crew as CrewModel, responseCasts as ResponseCastsModel } from '../../models/movie.model';
import { LoadingService } from 'src/app/shared/loading/loading.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  movie: MovieModel;
  casts: CastsModel[]
  crew: CrewModel[]

  constructor(
    private _service: MovieService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _loading: LoadingService
  ) { }

  ngOnInit(): void {
    this._loading.start()
    window.scrollTo(0, 0)
    const idMovie: number = +this._activatedRoute.snapshot.paramMap.get('id')
    this._service.getByPk(idMovie)
      .subscribe(movie => {
        this.movie = movie
      })
    this._service.getCast(idMovie)
      .subscribe((response: ResponseCastsModel) => {
        this.casts = response.cast
        this.crew = response.crew
      })
  }

  ngAfterViewInit() {
    this._loading.stop()
  }

  addBackground() {
    return {
      'background': `
        linear-gradient(to right, rgb(13, 13, 15), rgba(18, 18, 20, 0.9)),
        url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${this.movie?.poster_path}')
        no-repeat
        left
        center
        fixed
      `
    };
  }

  handleNavigateToHome() {
    this._router.navigateByUrl('/home');
  }

  formatMinutesToHours(minutes: number) {
    const hour = Math.floor(minutes / 60)
    const newMinutes = Math.round((minutes / 60 - hour) * 60)
    return `${hour}h ${newMinutes}m`;
  }

}
