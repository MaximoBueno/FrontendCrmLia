import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class  AuthGuard implements CanActivate, CanMatch{

  constructor (private authservice:AuthService, private router:Router ){}

  private checkAuthStatus(): boolean | Observable<boolean>{
    return this.authservice.checkAuthentication().pipe(
      tap( (isAuthenticated) =>  console.log('authenticado', isAuthenticated) ),
      tap( (isAuthenticated) => { 
        if(!isAuthenticated){
          this.router.navigate(['/auth/']);
        }
      })
    );
  }

  canMatch(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
    return this.checkAuthStatus();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.checkAuthStatus();
  }

}