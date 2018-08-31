import { Injectable } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';

@Injectable()
export class PlaceCategoryService {
  MAIN_URL= "http://localhost:8080";
  URL="/api/v1/placecategory/";

  constructor( private http: Http) { } 
   getAll(){
    console.log("GetAll Request");
    return this.http.get(this.MAIN_URL+this.URL);
     
   }
   save(post){
     console.log("Post Request");
   this.http.post(this.MAIN_URL+this.URL,post)
   .subscribe(asd =>{
     console.log(asd);
   });
  }

  get(id){
    console.log("Get(id) Request");
    return this.http.get( this.MAIN_URL+this.URL+id);
  }

  update(put){
    console.log("Put Request");
    this.http.put(this.MAIN_URL+this.URL,put).subscribe(pu=>{
      console.log(pu);
    });
  }

}
