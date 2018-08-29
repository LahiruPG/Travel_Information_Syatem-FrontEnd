import { Place } from './../../dto/place';
import { PlaceService } from './../../service/place.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  places: Place[];
  constructor(private service: PlaceService) { }

  ngOnInit() {
  }

  init(){
    this.service.getAll()
      .subscribe(response =>{
        this.places = response.json();
        //console.log(response.json());
      });
  }

}
