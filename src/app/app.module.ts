import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PreaxiaFooterComponent } from './ui/preaxia-footer/preaxia-footer.component';
import { PreaxiaNavComponent } from './ui/preaxia-nav/preaxia-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    PreaxiaFooterComponent,
    PreaxiaNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
