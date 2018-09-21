import { PlaceDTO } from '../dto/place';
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export const MAIN_URL = "http://localhost:8080";
const URL = "/api/v1/places";

@Injectable()
export class PlaceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<PlaceDTO>> {
    console.log('getAll request - PlaceService');
    return this.http.get<Array<PlaceDTO>>(MAIN_URL + URL);
  }
  find(id): Observable<PlaceDTO> {
    console.log('Find() request - PlaceService');
    return this.http.get<PlaceDTO>(MAIN_URL + URL + "/" + id);
  }

  delete(id: string): Observable<boolean> {
    console.log('delete request - PlaceService');
    return this.http.delete<boolean>(MAIN_URL + URL + "/" + id);
  }

  save(post) {
    console.log("post Request - PlaceService");
    return this.http.post(MAIN_URL + URL, post);
  }

  update(post) {
    console.log("put Request - PlaceService");
    return this.http.put(MAIN_URL + URL, post);
  }

  // uploadImage(post) {
  //   console.log("put Request Image Upload - PlaceService");
  //   const fd = new FormData();
  //   fd.append('file', post);
  //   return this.http.post(MAIN_URL + URL + "/images", fd).subscribe(r => {
  //     console.log(r);
  //   });
  // }


  uploadImage(file) {
    let formData = new FormData();
    formData.append("file",file,file.name);
    return this.http.post(MAIN_URL + URL + "/images", formData);
  }



}
