import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-life-cycle',
  templateUrl: './angular-life-cycle.component.html',
  styleUrls: ['./angular-life-cycle.component.css']
})
export class AngularLifeCycleComponent implements OnInit {

  constructor() {

  }
  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnChanges(){
    console.log('ngOnChanges');
  }
  ngDoCheck(){
    console.log('ngDoCheck');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(){
    console.log('ngOnDestory');
  }

}
