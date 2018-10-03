import { UserDTO } from './../../dto/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin = false;
  user: UserDTO = new UserDTO();
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  save(values) {
    this.authService.logIn(this.user)
      .subscribe(result => {
        if (result) {
          this.invalidLogin = false;
          this.router.navigate(['/']);
          return;
        }
        else {
          this.invalidLogin = true;
          alert("Invalide user name or password");
          console.log(this.invalidLogin);
          return;
        }

      })
  }


}
