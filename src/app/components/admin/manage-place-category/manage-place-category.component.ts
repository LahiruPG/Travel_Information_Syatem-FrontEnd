import { Component, OnInit } from '@angular/core';
import { PlaceCategoryService } from '../../../service/place-category.service';
import { PlaceCategoryDTO } from '../../../dto/place-category';

@Component({
  selector: 'app-manage-place-category',
  templateUrl: './manage-place-category.component.html',
  styleUrls: ['./manage-place-category.component.css']
})
export class ManagePlaceCategoryComponent implements OnInit {
  categoryList: PlaceCategoryDTO[] = [];
  category: PlaceCategoryDTO = new PlaceCategoryDTO();
  isSaved: boolean = false;
  isDeleted: boolean=false;

  constructor(private service: PlaceCategoryService) {}

  ngOnInit() {
    this.updateList();
  }

  save() {
    this.service.save(this.category).subscribe(res => {
      this.isSaved = res;
      this.category=new PlaceCategoryDTO();
      this.updateList();
    });
  }

  delete(val:string){
    this.service.delete(val).subscribe(res=>{
      this.isDeleted=true;
      this.category=new PlaceCategoryDTO();
      this.updateList();
    })
  }

  updateList(){
    this.service.getAll().subscribe(response => {
      this.categoryList = response;
    });
  }

}
