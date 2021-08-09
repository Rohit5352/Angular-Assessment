// import { Injectable } from '@angular/core';
// import { 
//   CanActivate, 
//   CanLoad,
//   Route,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot, 
//   Router} from '@angular/router';

// import { AuthService } from '../services/auth.service';

// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(private auth: AuthService, private router: Router) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): boolean {
//       if (!this.auth.getUser) {
//         this.router.navigate(['login']);
//       }
//       return this.auth.getUser();
//   }

//   canLoad(route: Route): boolean {
//     return this.auth.isAuthenticated();
//   }
// }

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

// import { AuthService } from './auth.service';

@Injectable({
   providedIn: 'root'
})
export class AuthGuard implements CanActivate {

   constructor(private authService: AuthService, private router: Router) {}

   canActivate(
   next: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): boolean | UrlTree {
      let url: string = state.url;

          return this.checkLogin(url);
      }

      checkLogin(url: string): true | UrlTree {
         console.log("Url: " + url)
         let val: string = localStorage.getItem('isUserLoggedIn');

         if(val != null && val == "true"){
            if(url == "/login")
               this.router.parseUrl('/expenses');
            else 
               return true;
         } else {
            return this.router.parseUrl('/login');
         }
      }
}