import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { PlaceCategoryDTO } from '../dto/place-category';

export const MAIN_URL = "http://localhost:8080";
const URL = "/api/v1/placecategory/";


@Injectable()
export class PlaceCategoryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<PlaceCategoryDTO>> {
    console.log('getAll request - PlaceCategoryService');
    return this.http.get<Array<PlaceCategoryDTO>>(MAIN_URL + URL);
  }
  find(id): Observable<PlaceCategoryDTO> {
    console.log('Find() request - PlaceCategoryService');
    return this.http.get<PlaceCategoryDTO>(MAIN_URL + URL + "/" + id);
  }

  delete(id: string): Observable<boolean> {
    console.log('delete request - PlaceCategoryService');
    return this.http.delete<boolean>(MAIN_URL + URL + "/" + id);
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
