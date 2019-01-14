import { Role } from './_models/role';
import { AuthService } from './_services/auth.service';

import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { User } from './_models/user';
import { Router } from '@angular/router';

interface AppState {
  currentUser: User;
  role: Role;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //currentUser: User;
  constructor(
    public location: Location,
    private router: Router,
    private authService: AuthService
  ) {
    //this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  isMap(path) {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice(1);
    if (path == titlee) {
      return false;
    }
    else {
      return true;
    }
  }
}
