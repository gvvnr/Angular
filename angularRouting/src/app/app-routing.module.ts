import { NgModule } from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import {ChildComponent} from "./child/child.component";
import {Child1Component} from "./child1/child1.component";
const route: Routes = [
  {path :'child1', component :Child1Component}
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(route),
  ]
})
export class AppRoutingModule {

}
