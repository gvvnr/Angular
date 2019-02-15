import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { AppRoutingModule } from './app-routing.module';
import { Child1Component } from './child1/child1.component';
import {RouterModule} from "@angular/router";
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Child1Component,
    PageNotFoundComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
