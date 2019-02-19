import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: 'homePage', component: HomePageComponent },
  { path: '**',component: AppComponent},

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]

})
export class AppRoutingModule { }
