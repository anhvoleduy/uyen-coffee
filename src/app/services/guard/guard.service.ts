import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
// import { AuthenticationService } from './authentication.service';
// import { Constants } from '../enums/index';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(
    private router: Router,
    // private authenticationService: AuthenticationService
  ) { }

  canActivate() {
    // if(this.authenticationService.isAuthenticated()) {
    //   if (this.authenticationService.isAuthorized(Constants.ADMIN_ROLE.MASTER) || 
    //       this.authenticationService.isAuthorized(Constants.ADMIN_ROLE.ASSISTANT)) {
    //     // this.router.navigate(['/admin/dashboard']);
    //     return true;
    //   }

    //   return false;
    // }

    this.router.navigate(['/login']);
    return false;
  }
}
