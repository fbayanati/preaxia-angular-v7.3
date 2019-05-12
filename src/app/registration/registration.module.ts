import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './components/registration/registration.component';
import { SoleComponent } from './components/sole/sole.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    SoleComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { }
