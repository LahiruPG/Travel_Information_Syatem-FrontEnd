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
place={};
  constructor(
    private service: PlaceService,
    private rout: ActivatedRoute
  ) { 
    this.id = this.rout.snapshot.paramMap.get('id');
    if (this.id) this.service.get(this.id).take(1).subscribe(p => this.place = p.json());
  }

  ngOnInit() {
  }

}
