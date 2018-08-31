import { Place } from './../../../dto/place';
import { PlaceService } from './../../../service/place.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterEvent } from '../../../../../node_modules/@angular/router';
import 'rxjs/add/operator/take';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import { PlaceCategoryService } from '../../../service/place-category.service';

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
  category = [];

  // Alert
  private _success = new Subject<string>();
  staticAlertClosed = false;
  successMessage: string;

  constructor(
    private pcategory: PlaceCategoryService,
    private rout: ActivatedRoute,
    private service: PlaceService) {
    this.id = this.rout.snapshot.paramMap.get('id');
    if (this.id) this.service.get(this.id).take(1).subscribe(p => this.place = p.json());
  }

  ngOnInit() {
    this.InitAlert();
    this.pcategory.getAll().subscribe(pc =>{
      this.category = pc.json();
    });
  }

  save(post) {
    if(this.id) this.update(post);
    else this.service.save(post);
   this.changeSuccessMessage();
  }

  getAll() {
    this.service.getAll();
  }

  update(put) {
    this.service.update(put);
    this.changeSuccessMessage();
    
  }

  delete() {

  }

  InitAlert(): void {
    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(3000)
    ).subscribe(() => this.successMessage = null);
  }

  public changeSuccessMessage() {
    if (this.id) this._success.next(`successfully updated.`);
    else this._success.next(`successfully saved.`);
  }

}
