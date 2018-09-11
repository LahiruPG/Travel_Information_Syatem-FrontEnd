import { Place } from './../../dto/place';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.css']
})
export class PlaceCardComponent implements OnInit {
  @Input('place') place: Place;
  desc: String="";
  constructor() {}

  ngOnInit() {
        this.desc=this.place.description.substring(0,250)+"...";
  }

}
