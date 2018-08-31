import { Place } from './../../../dto/place';
import { PlaceService } from './../../../service/place.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-place',
  templateUrl: './admin-place.component.html',
  styleUrls: ['./admin-place.component.css']
})
export class AdminPlaceComponent implements OnInit {
  places:Place[];
  constructor(private placeService: PlaceService) { 
   
  }

  ngOnInit() {
    this.placeService.getAll()
      .subscribe(response =>{
        this.places = response.json();
        //console.log(response.json());
      });
  }

  

}