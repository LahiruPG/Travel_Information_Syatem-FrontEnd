import { PlaceCategoryService } from './../../../service/place-category.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'places-filter',
  templateUrl: './places-filter.component.html',
  styleUrls: ['./places-filter.component.css']
})
export class PlacesFilterComponent implements OnInit {
  pcategoty=[];
  @Input('category') category;

  constructor(private pcategoryservice: PlaceCategoryService) { }

  ngOnInit() {
    this.pcategoryservice.getAll().subscribe(response =>{
      this.pcategoty = response.json();
      console.log(this.pcategoty);
    });
  }

}
