import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { SoleComponent } from './components/sole/sole.component';

const registrationRoutes: Routes = [
  {
    path: '',
    component: RegistrationComponent
  },
  {
    path: 'sole',
    component: SoleComponent
  },
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
