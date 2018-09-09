import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../dto/user';

@Injectable()
export class AuthService {
  MAIN_URL= "http://localhost:8080";
  URL="/api/v1/user/";
  user: User;
  constructor(private http: Http) { }
  getAll(){
    
  }
  logIn(values){
    console.log("login post request");
    return this.http.post(this.MAIN_URL+this.URL+'user',values)
    .map(response => { 

      this.user = response.json();
      console.log(response.json());
      if(this.user.email){
        localStorage.clear();
        localStorage.setItem('email',this.user.email);
        localStorage.setItem('name',this.user.name);
        localStorage.setItem('type',this.user.type);
        return true;  
      }
      return false;
    });
  }
  logOut(){
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    localStorage.removeItem('type');
  }

  isLoggedIn(){
    // console.log("isLogin");
    if(localStorage.getItem('email'))
    return true;
    else
    return false;
  }

  isAdmin(){
    if(localStorage.getItem('type')==='admin')
    return true;
    else
    return false;
  }

  isUser(){
    if(localStorage.getItem('type')==='user')
    return true;
    else
    return false;
  }

  getUserName(){
    return localStorage.getItem('name');
  }
 
}
