import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserProfileService } from 'app/user-profile.service';


@Injectable({
  providedIn: 'root'
})
export class OwnerAuthGuard implements CanActivate {

  constructor(private userService:UserProfileService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.userService.role==='owner') {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}