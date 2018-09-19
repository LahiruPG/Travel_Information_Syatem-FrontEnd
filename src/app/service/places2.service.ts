import { PlaceDTO } from './../dto/placeDTO';
import { Observable } from 'rxjs/';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


export const MAIN_URL= "http://localhost:8080";
const URL="/api/v1/places/";
@Injectable()
export class Places2Service {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<PlaceDTO>>{
    return this.http.get<Array<PlaceDTO>>(MAIN_URL + URL);
  }
  find(id): Observable<PlaceDTO>{
    return this.http.get<PlaceDTO>(MAIN_URL + URL + id);
  }

  // delete(id: string): Observable<boolean>{
  //   return this.http.delete<boolean>(MAIN_URL+ URL + "/" + id);
  // }

  // save(Place: PlaceDTO): Observable<boolean>{
  //   return this.http.post<boolean>(MAIN_URL + URL,Place);
  // }

  // getTotal(): Observable<number>{
  //   return this.http.get<number>(MAIN_URL + URL + "/count");
  // }
}