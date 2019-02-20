import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularLifeCycleComponent } from './angular-life-cycle/angular-life-cycle.component';
import { PipesComponent } from './pipes/pipes.component';
import { DataPipe } from './data.pipe';
import { PhoneNumberPipe } from './phone-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AngularLifeCycleComponent,
    PipesComponent,
    DataPipe,
    PhoneNumberPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
