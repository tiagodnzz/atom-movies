import { Component, OnInit, Input } from '@angular/core';
import { crew as CrewModel } from '../../models/movie.model';

@Component({
  selector: 'card-crew',
  templateUrl: './card-crew.component.html',
  styleUrls: ['./card-crew.component.scss']
})
export class CardCrewComponent implements OnInit {

  @Input() crewItem: CrewModel

  constructor() { }

  ngOnInit(): void {
  }

}
