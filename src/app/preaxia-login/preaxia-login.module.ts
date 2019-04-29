import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreaxiaLoginRoutingModule } from './preaxia-login-routing.module';
import { PreaxiaLoginComponent } from './preaxia-login/preaxia-login.component';

@NgModule({
  declarations: [PreaxiaLoginComponent],
  imports: [
    CommonModule,
    PreaxiaLoginRoutingModule
  ]
})
export class PreaxiaLoginModule { }
