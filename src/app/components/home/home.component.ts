import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  images = [
  "https://www.copytrans.net/admin/wp/wp-content/uploads/2015/07/sunrise-on-forest-1920x500.jpg",
  "https://www.socialprint.com/wp-content/uploads/banner.policies.1920x500.png",
  "https://www.middleforkwillamette.org/wp-content/uploads/2016/05/DSCN2749-1920x500.jpg"
];

  constructor() {
   console.log(this.images);
  }


  ngOnInit() {
   
  }

  
}
