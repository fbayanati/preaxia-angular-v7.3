import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preaxia-login',
  templateUrl: './preaxia-login.component.html',
  styleUrls: ['./preaxia-login.component.scss']
})
export class PreaxiaLoginComponent implements OnInit, OnDestroy {

  ui: firebaseui.auth.AuthUI;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone
  ) {
    // TODO :: whatever necessary!
  }

  ngOnInit() {

    const uiConfig = {
      signInOptions: [
        // The providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult:
          this.onLoginSuccessful.bind(this)
          // Process result. This will not trigger on merge conflicts.
          // On success redirect to signInSuccessUrl.
      }
    }

    this.ui = new firebaseui.auth.AuthUI(this.afAuth.auth);
    this.ui.start('#firebaseui-auth-container', uiConfig);
  }

  onLoginSuccessful(authResult: any) {

    this.ngZone.run( () => {
      this.router.navigateByUrl('');
    });

  }

  ngOnDestroy(): void {
    this.ui.delete();
  }

}
