import { Component, OnInit } from '@angular/core';
import {Student} from "../StudentDetails";

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  messageEvent: any;
  name: any;
  userTestStatus: Student[] = [
    {id: 0, name: 'vamsi', phone: '9999999999'},
    {id: 1, name: 'avinash', phone: '9999999999'},
    {id: 2, name: 'rahul', phone: '9999999999'}
  ];
  private i: number;

  sendData(data) {
    this.messageEvent = data;
  }

  deleteValue(value: Student) {
    for (this.i = 0; this.i < this.userTestStatus.length; this.i++) {
      if (this.userTestStatus[this.i] == value) {
        //  delete this.userTestStatus[this.i];
        this.userTestStatus.splice(this.i, 1);
      }
    }


  }

  ngOnInit(): void {
  }

}
