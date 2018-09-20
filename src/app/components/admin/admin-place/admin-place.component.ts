import { PlaceDTO } from '../../../dto/place';
import { PlaceService } from './../../../service/place.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-place',
  templateUrl: './admin-place.component.html',
  styleUrls: ['./admin-place.component.css']
})
export class AdminPlaceComponent implements OnInit {
  places: PlaceDTO[] = [];

  constructor(private service: PlaceService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(response => {
        this.places = response;
      });
  }
}
