import { Place } from './../../../dto/place';
import { PlaceService } from './../../../service/place.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'place-form',
  templateUrl: './place-form.component.html',
  styleUrls: ['./place-form.component.css']
})
export class PlaceFormComponent implements OnInit {
  place = {};
  name;
  places: Place[];
  id;

  constructor(
    private rout: ActivatedRoute,
    private service: PlaceService) {
    this.id = this.rout.snapshot.paramMap.get('id');
    if (this.id) this.service.get(this.id).take(1).subscribe(p => this.place = p.json());
  }

  ngOnInit() {
  }

  save(post) {
    if(this.id) this.update(post);
    else this.service.save(post);
  }

  getAll() {
    this.service.getAll();
  }

  update(put) {
    this.service.update(put);
  }

  delete() {

  }

}
