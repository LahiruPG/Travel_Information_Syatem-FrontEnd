import { PlaceImageService } from './../../../service/place-image.service';
import { PlaceCategoryDTO } from './../../../dto/place-category';
import { PlaceService } from './../../../service/place.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterEvent, Router } from '../../../../../node_modules/@angular/router';
import 'rxjs/add/operator/take';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PlaceCategoryService } from '../../../service/place-category.service';
import { PlaceDTO } from '../../../dto/place';
import { PlaceImageDTO } from '../../../dto/place-image';

@Component({
  selector: 'place-form',
  templateUrl: './place-form.component.html',
  styleUrls: ['./place-form.component.css']
})
export class PlaceFormComponent implements OnInit {
  place: PlaceDTO = new PlaceDTO();
  userType: string = "";
  id;
  category: PlaceCategoryDTO[] = [];
  url;
  file: File = null;
  uplodedImageUrlList: PlaceImageDTO[] = [];

  constructor(
    private pcategory: PlaceCategoryService,
    private rout: ActivatedRoute,
    private service: PlaceService,
    private router: Router,
    public imageService: PlaceImageService
  ) {
    this.userType = localStorage.getItem('type');
    console.log(this.userType);
    this.id = this.rout.snapshot.paramMap.get('id');
    if (this.id) this.service.find(this.id).take(1).subscribe(p => this.place = p);
  }

  ngOnInit() {
    this.pcategory.getAll().subscribe(pc => {
      this.category = pc;
    });

  }

  save(post) {
    if (this.userType = 'user') {
      this.place.status = 'request';
    }

    if (this.id) {
      this.uplodedImageUrlList.forEach(element => {
        this.place.imageUrl.push(element);
      });

      this.service.update(this.place).subscribe(asd => {
        this.router.navigate(['/admin/admin-panel/manage-places']);
        console.log(asd);
      });
    }
    else this.service.save(this.place).subscribe(asd => {
      this.router.navigate(['/admin/admin-panel/manage-places']);
      console.log(asd);
    });

  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.url = <File>event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
      this.file = event.target.files[0];
    }
  }

  uploadImage() {
    this.service.uploadImage(this.file).subscribe(r => {
      let dto: PlaceImageDTO = <PlaceImageDTO>r;
      dto.placeId = this.id;
      this.uplodedImageUrlList.push(dto);
    });;
  }

  saveImageList() {
    this.imageService.saveList(this.uplodedImageUrlList).subscribe(r => {
      console.log("image list saved");
    });

  }
}
