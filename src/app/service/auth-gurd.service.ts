import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Route, Router } from '@angular/router';

@Injectable()
export class AuthGurdService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {

    if (this.authService.isLoggedIn() && this.authService.isAdmin())
      return true;
    this.router.navigate(['/login']);
    return false;

  }
}
