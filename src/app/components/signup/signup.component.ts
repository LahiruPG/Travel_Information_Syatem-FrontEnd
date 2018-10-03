import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserDTO } from '../../dto/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: UserDTO = new UserDTO();
  password1: string = "";
  password2: string = "";

  constructor(private service: AuthService) { }

  ngOnInit() {
  }

  regester() {
    if (this.checkPassword()) {
      this.user.password = this.password2;
      this.user.type="user";
      console.log(this.user);
this.service.Register(this.user);
    }else{
      alert("Somethig worng please try later")
    }
  }

  checkPassword() {
    if (this.password2 == this.password1) {
      this.user.password == this.password2;
      return true;
    } else {
      return false;
    }
  }

}
