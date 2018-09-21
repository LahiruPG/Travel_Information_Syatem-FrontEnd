import { PlaceCategoryDTO } from './../../../dto/place-category';
import { PlaceCategoryService } from './../../../service/place-category.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'places-filter',
  templateUrl: './places-filter.component.html',
  styleUrls: ['./places-filter.component.css']
})
export class PlacesFilterComponent implements OnInit {
  pcategoty:PlaceCategoryDTO[]=[];
  @Input('category') category;

  constructor(private pcategoryservice: PlaceCategoryService) { }

  ngOnInit() {
    this.pcategoryservice.getAll().subscribe(response =>{
      this.pcategoty = response;
    });
  }

}
