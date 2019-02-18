import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(protected localStorage: LocalStorage) { }
  public StudentRegistrationForm : FormGroup;


  ngOnInit() {
    this.StudentRegistrationForm = new FormGroup({
      fullName: new FormControl(''),
      fathersName: new FormControl(''),
      portalAddress: new FormControl(''),
      personalAddress: new FormControl(''),
      gender: new FormControl(''),
      pinCode: new FormControl(''),
      EmailId: new FormControl(''),
      DOB: new FormControl(''),
      MobileNo: new FormControl('')
    });
  }


    displayName() {
    console.log(this.StudentRegistrationForm.value)

   // this.localStorage.setItem('userName', this.StudentRegistrationForm).subscribe(() => {});
  }
  resetData(){
    alert("Reset");
  }


}
