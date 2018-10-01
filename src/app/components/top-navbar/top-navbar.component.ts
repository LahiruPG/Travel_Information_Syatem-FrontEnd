import { Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css'],
})
export class TopNavbarComponent implements OnInit {
  public isCollapsed = true;
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {
  }

  logOut(){
    this.authService.logOut();
    //this.router.navigate(['/']);
  }

}
