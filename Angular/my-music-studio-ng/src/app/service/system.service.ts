import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  loggedInUser: User = null;
  constructor(private router: Router) { }
  isAdmin(): boolean {
    return (this.loggedInUser == null) ? false : this.loggedInUser.isAdmin;
  }
  checkLogin(): void {
    // if user is not logged in, send to login page
    // commenting out for testing purposes
    if(this.loggedInUser == null) {
      this.router.navigateByUrl("/users/login");
    }
  }
}


