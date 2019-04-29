import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-preaxia-login',
  templateUrl: './preaxia-login.component.html',
  styleUrls: ['./preaxia-login.component.scss']
})
export class PreaxiaLoginComponent implements OnInit {

  ui: firebaseui.auth.AuthUI;

  constructor(
    private afAuth: AngularFireAuth
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

  onLoginSuccessful() {

  }

}
