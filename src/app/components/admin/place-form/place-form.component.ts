import { PlaceCategoryDTO } from './../../../dto/place-category';
import { PlaceService } from './../../../service/place.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterEvent, Router } from '../../../../../node_modules/@angular/router';
import 'rxjs/add/operator/take';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PlaceCategoryService } from '../../../service/place-category.service';
import { PlaceDTO } from '../../../dto/place';

@Component({
  selector: 'place-form',
  templateUrl: './place-form.component.html',
  styleUrls: ['./place-form.component.css']
})
export class PlaceFormComponent implements OnInit {
  place: PlaceDTO = new PlaceDTO();
  id;
  category:PlaceCategoryDTO[]=[];
  // Alert
  private _success = new Subject<string>();
  staticAlertClosed = false;
  successMessage: string;

  constructor(
    private pcategory: PlaceCategoryService,
    private rout: ActivatedRoute,
    private service: PlaceService,
    private router: Router
  ) {
    this.id = this.rout.snapshot.paramMap.get('id');
    if (this.id) this.service.find(this.id).take(1).subscribe(p => this.place = p);
  }

  ngOnInit() {
    this.InitAlert();
    this.pcategory.getAll().subscribe(pc => {
      this.category = pc;
    });
  }

  save(post) {
    if (this.id) this.service.update(this.place).subscribe(asd =>{
      this.router.navigate(['/admin/manage-places/']);
      console.log(asd);
      this.changeSuccessMessage();
    });
    else this.service.save(this.place).subscribe(asd =>{
      this.router.navigate(['/admin/manage-places/']);
      console.log(asd);
      this.changeSuccessMessage();
    });  
  }

  InitAlert(): void {
    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(3000)
    ).subscribe(() => this.successMessage = null);
  }

  changeSuccessMessage() {
    if (this.id) this._success.next(`successfully updated.`);
    else this._success.next(`successfully saved.`);
  }

  
  
}
