import { PlaceReviewDTO } from './../dto/place-review';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

export const MAIN_URL = "http://localhost:8080";
const URL = "/api/v1/placereviews";

@Injectable()
export class PlaceReviewService {

   constructor(private http: HttpClient) { }

  getAll(): Observable<Array<PlaceReviewDTO>> {
    console.log('getAll request - PlaceCategoryService');
    return this.http.get<Array<PlaceReviewDTO>>(MAIN_URL + URL);
  }
  find(id): Observable<PlaceReviewDTO> {
    console.log('Find() request - PlaceCategoryService');
    return this.http.get<PlaceReviewDTO>(MAIN_URL + URL + "/" + id);
  }

  delete(id) {
    console.log('delete request - PlaceCategoryService');
    return this.http.delete(MAIN_URL + URL + "/" + id);
  }

  save(post) {
    console.log("post Request - PlaceCategoryService");
    return this.http.post(MAIN_URL + URL, post);
  }

  update(post) {
    console.log("put Request - PlaceCategoryService");
    return this.http.put(MAIN_URL + URL, post);
  }

}
