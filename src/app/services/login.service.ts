import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

interface User {
    email: string;
    loggedIn: boolean;
}


@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private userSubject$ = new BehaviorSubject<User>({email: '', loggedIn: false});
    user$: Observable<User> = this.userSubject$.asObservable();

    constructor(
        private router: Router
    ) {

    }

    login(email: string) {
        this.userSubject$.next({
            email: email,
            loggedIn: true
        })

        this.router.navigate(['admin'])
    }
}