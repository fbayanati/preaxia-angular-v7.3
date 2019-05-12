import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './components/registration/registration.component';
import { SoleComponent } from './components/sole/sole.component';
import { IncorporatedComponent } from './components/incorporated/incorporated.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    SoleComponent,
    IncorporatedComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { }
