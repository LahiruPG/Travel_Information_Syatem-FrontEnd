import { PlaceDTO } from '../../dto/place';
import { Component, OnInit, Input } from '@angular/core';
import { PlaceImageDTO } from '../../dto/place-image';

@Component({
  selector: 'place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.css']
})
export class PlaceCardComponent implements OnInit {
  @Input('place') place: PlaceDTO;
  desc: String = "null";
  image: PlaceImageDTO= new PlaceImageDTO();
  constructor() { }

  ngOnInit() {
    this.desc = this.place.description.substring(0, 250) + "...";
    this.image=this.place.imageUrl[0];
  }
}
