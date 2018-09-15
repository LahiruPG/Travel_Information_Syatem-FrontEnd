import { ActivatedRoute } from '@angular/router';
import { PlaceService } from './../../service/place.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'place-info',
  templateUrl: './place-info.component.html',
  styleUrls: ['./place-info.component.css']
})
export class PlaceInfoComponent implements OnInit {
  id;
  place = {};

  title = 'Star Rating';
  starList: boolean[] = [true, true, true, true, true];       // create a list which contains status of 5 stars
  rating: number;

  constructor(
    private service: PlaceService,
    private rout: ActivatedRoute
  ) {
    this.id = this.rout.snapshot.paramMap.get('id');
    if (this.id) this.service.get(this.id).take(1).subscribe(p =>
      this.place = p.json());
  }

  ngOnInit() {
  }


  setStar(data: any) {
    this.rating = data + 1;
    for (var i = 0; i <= 4; i++) {
      if (i <= data) {
        this.starList[i] = false;
      }
      else {
        this.starList[i] = true;
      }
    }
  }

}
