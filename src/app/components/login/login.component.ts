import { UserDTO } from './../../dto/user';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { PlaceReviewService } from '../../service/place-comment.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input('close') close;
  invalidLogin = false;
  user: UserDTO = new UserDTO();
  constructor(
    private router: Router,
    private authService: AuthService,
    private reviewService: PlaceReviewService
  ) { }

  ngOnInit() {
  }

  save(values) {
    this.authService.logIn(this.user)
      .subscribe(result => {
        if (result) {
          this.invalidLogin = false;
          // this.reviewService.loadReviews();
          // this.router.navigate(['/']);
          this.close.hide();
          return;
        }
        else {
          this.invalidLogin = true;
          // alert("Invalide user name or password");
          return;
        }

      })
  }

  errorMsg(){
    this.invalidLogin=false;
  }


}
