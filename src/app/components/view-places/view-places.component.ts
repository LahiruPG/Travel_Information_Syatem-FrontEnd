import { PlaceCategoryService } from './../../service/place-category.service';
import { PlaceService } from './../../service/place.service';
import { Component, OnInit } from '@angular/core';
import { Place } from './../../dto/place';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'view-places',
  templateUrl: './view-places.component.html',
  styleUrls: ['./view-places.component.css']
})
export class ViewPlacesComponent implements OnInit {
  places: Place[]=[];
  filteredPlaces= [];
  pcategoty=[];
  category:string;
  constructor(
    private route: ActivatedRoute, 
    private plaveservice: PlaceService, 
    private pcategoryservice: PlaceCategoryService) {

  }

  ngOnInit() {
    this.plaveservice.getAll()
    .subscribe(response =>{
      this.places = response.json();

      this.route.queryParamMap.subscribe(params =>{
        this.category = params.get('category');
        this.filteredPlaces = (this.category) ?
        this.places.filter(p => p.type === this.category) :
        this.places;
      });

    });
    this.pcategoryservice.getAll()
    .subscribe(response =>{
      this.pcategoty = response.json();
      console.log(this.pcategoty);
    });
    
    

  }

}
