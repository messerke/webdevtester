import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private loginService: LoginService
    ) {}
    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        return this.loginService.user$.pipe(map(user => {
            if(!user.loggedIn) {
              this.router.navigate(['/']);
              return false;
            }
            return true;
          })
          )
      }
}

