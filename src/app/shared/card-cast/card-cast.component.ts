import { Component, OnInit, Input } from '@angular/core';
import {cast as CastsModel} from '../../models/movie.model';

@Component({
  selector: 'card-cast',
  templateUrl: './card-cast.component.html',
  styleUrls: ['./card-cast.component.scss']
})
export class CardCastComponent implements OnInit {

  @Input() castItem: CastsModel

  constructor() { }

  ngOnInit(): void {
  }

}
