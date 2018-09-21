import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PlaceImageDTO } from '../dto/place-image';

export const MAIN_URL = "http://localhost:8080";
const URL = "/api/v1/placeimages";

@Injectable()
export class PlaceImageService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<PlaceImageDTO>> {
    console.log('getAll request - PlaceCategoryService');
    return this.http.get<Array<PlaceImageDTO>>(MAIN_URL + URL);
  }
  find(id): Observable<PlaceImageDTO> {
    console.log('Find() request - PlaceCategoryService');
    return this.http.get<PlaceImageDTO>(MAIN_URL + URL + "/" + id);
  }

  delete(id) {
    console.log('delete request - PlaceCategoryService');
    return this.http.delete(MAIN_URL + URL + "/" + id);
  }

  save(post) {
    console.log("post Request - PlaceCategoryService");
    return this.http.post(MAIN_URL + URL, post);
  }
  saveList(post) {
    console.log("post Request - PlaceCategoryService");
    return this.http.post(MAIN_URL + URL+"/list", post);
  }

  update(post) {
    console.log("put Request - PlaceCategoryService");
    return this.http.put(MAIN_URL + URL, post);
  }

}
