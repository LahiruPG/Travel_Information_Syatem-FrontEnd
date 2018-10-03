import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';
import { Injectable, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { UserDTO } from '../dto/user';

@Injectable()
export class AuthService{
  MAIN_URL= "http://localhost:8080";
  URL="/api/v1/user/";
  user: UserDTO =new UserDTO();
  constructor(private http: HttpClient) { }
  Register(user: UserDTO){
    this.http.post<boolean>(this.MAIN_URL+this.URL,user).subscribe(result=>{
      console.log(result);
    });
  }
  logIn(values:UserDTO){
    console.log("login post request");
    return this.http.post<UserDTO>(this.MAIN_URL+this.URL+'login',values)
    .map(response => { 
      this.user = response;
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
