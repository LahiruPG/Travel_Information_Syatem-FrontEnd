import { AuthService } from './../../service/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { UserDTO } from '../../dto/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Input('close') close;
  user: UserDTO = new UserDTO();
  password1: string = "";
  password2: string = "";
  isEmail: boolean = true;
  success: boolean = false;
  isOk:boolean =true;

  constructor(private service: AuthService) { }

  ngOnInit() {
  }

  regester() {
    if (this.checkPassword() && this.isEmail && this.user.name && this.user.email) {
      this.user.password = this.password2;
      this.user.type = "user";
      this.service.signup(this.user).subscribe(res => {
        this.success = true;
        this.service.logIn(this.user).subscribe(res=>{});
        this.close.hide();
      });
      return;
    } else {
      this.isOk=false;
      //  alert("Please check information again")
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


  checkEmail(emil: string) {
    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    this.isEmail = regexp.test(emil);
    
  }

}
