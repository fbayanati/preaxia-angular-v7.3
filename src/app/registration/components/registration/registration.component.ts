import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AccountType } from 'src/app/model/account';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public acountType = AccountType;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  registerAccount(accountType: string) {
    console.log( 'registerAccount :: ', accountType );
    this.router.navigate(['/registration/account', { type: accountType }]);
  }

  accountType() {
    return AccountType;
  }

}
