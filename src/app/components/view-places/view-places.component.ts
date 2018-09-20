import { PlaceDTO } from '../../dto/place';
import { PlaceService } from './../../service/place.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'view-places',
  templateUrl: './view-places.component.html',
  styleUrls: ['./view-places.component.css']
})
export class ViewPlacesComponent implements OnInit {
  places: PlaceDTO[] = [];
  filteredPlaces: PlaceDTO[] = [];

  category: string;
  constructor(
    private route: ActivatedRoute,
    private plaveservice: PlaceService
  ) { }

  ngOnInit() {
    this.plaveservice.getAll().subscribe(response => {
      this.places = response;
      this.route.queryParamMap.subscribe(params => {
        this.category = params.get('category');
        this.filteredPlaces = (this.category) ?
          this.places.filter(p => p.type === this.category) :
          this.places;
      });
    });
  }
}
