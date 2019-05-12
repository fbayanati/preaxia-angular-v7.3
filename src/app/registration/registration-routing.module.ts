import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';

const registrationRoutes: Routes = [
  {
    path: '',
    component: RegistrationComponent
  },
  // {
  //   path: 'sole',
  //   component: UserRegistrationComponent
  // },
  // {
  //   path: 'incorporated',
  //   component: EmailValidationComponent
  // },
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
