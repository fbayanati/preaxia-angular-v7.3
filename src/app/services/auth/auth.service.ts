import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn$: Observable<boolean>
  isLoggedOut$: Observable<boolean>

  constructor(
    private afAuth: AngularFireAuth
  ) {

    this.isLoggedIn$ =
      this.afAuth.authState
      .pipe(
        map (
          user => !!user
        )
      );

    this.isLoggedOut$ =
      this.isLoggedIn$
      .pipe(
        map(
          loggedIn => !loggedIn
        )
      );
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

}
