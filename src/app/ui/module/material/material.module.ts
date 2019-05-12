import { NgModule } from '@angular/core';

import {
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
