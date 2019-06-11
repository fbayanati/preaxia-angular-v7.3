import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { SoleComponent } from './components/sole/sole.component';
import { IncorporatedComponent } from './components/incorporated/incorporated.component';
import { AccountComponent } from './components/account/account.component';

const registrationRoutes: Routes = [
  {
    path: '',
    component: RegistrationComponent
  },
  {
    path: 'sole',
    component: SoleComponent
  },
  {
    path: 'incorporated',
    component: IncorporatedComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(registrationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RegistrationRoutingModule { }
