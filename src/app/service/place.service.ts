import { PlaceDTO } from './../dto/placeDTO';
import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';
import { Observable } from 'rxjs';

export const MAIN_URL= "http://localhost:8080";
const URL="/api/v1/places/";

@Injectable()
export class PlaceService {

   
  constructor( private http: Http) { } 
  
   getAll(){
    console.log("GetAll Request");
    return this.http.get(MAIN_URL+URL);
     
   }
   save(post){
     console.log("Post Request");
   this.http.post(MAIN_URL+URL,post)
   .subscribe(asd =>{
     console.log(asd);
   });
  }

  get(id){
    console.log("Get(id) Request");
    return this.http.get(MAIN_URL+URL+id);
  }

  update(put){
    console.log("Put Request");
    this.http.put(MAIN_URL+URL,put).subscribe(pu=>{
      console.log(pu);
    });
  }



}
