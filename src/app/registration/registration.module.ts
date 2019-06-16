import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './components/registration/registration.component';
import { SoleComponent } from './components/sole/sole.component';
import { IncorporatedComponent } from './components/incorporated/incorporated.component';
import { MaterialModule } from '../ui/module/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AccountComponent } from './components/account/account.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    SoleComponent,
    IncorporatedComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegistrationModule { }
