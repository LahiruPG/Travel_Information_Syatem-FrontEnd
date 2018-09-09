import { User } from './../../dto/user';
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
  user: User;
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  save(values) {
    this.authService.logIn(values)
      .subscribe(result => {
        if (result)
          this.router.navigate(['/']);
        else
          this.invalidLogin = true;
      })
  }

  
  
}
