import { NgModule } from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import {Child1Component} from "./child1/child1.component";
import {ChildComponent} from "./child/child.component";
import {PageNotFoundComponentComponent} from "./page-not-found-component/page-not-found-component.component";

const routes: Routes = [
  {path: 'child1', component: Child1Component},
  {path :'child', component:ChildComponent},
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})

export class AppRoutingModule {

}
