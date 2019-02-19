import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  list = [];
  constructor(protected localStorage: LocalStorage, private router: Router) { }
  public StudentRegistrationForm : FormGroup;

  cities = ['Hyderabad', 'bangalore', 'chennai']
  courses =['computer Science','Mechanical Engineering'];
  districts=['Guntur','nellore','vijayawada'];
  states=['Andhra Pradesh','Telangana','punjab'];
  details =[];
  ngOnInit() {
    this.StudentRegistrationForm = new FormGroup({
      fullName: new FormControl('',[Validators.required]),
      fathersName: new FormControl(''),
      portalAddress: new FormControl(''),
      personalAddress: new FormControl(''),
      gender: new FormControl(''),
      pinCode: new FormControl(''),
      EmailId: new FormControl(''),
      DOB: new FormControl(''),
      MobileNo: new FormControl(''),
      city:new FormControl(''),
      course:new FormControl(''),
      district:new FormControl(''),
      state:new FormControl(''),
    });


  }


    displayName(url) {
    console.log(this.StudentRegistrationForm.getRawValue())
      //this.list.push(this.StudentRegistrationForm.getRawValue())
      this.details.push(this.StudentRegistrationForm.controls['fullName'].value ,this.StudentRegistrationForm.controls['fathersName'].value);
     /* this.list.push(this.StudentRegistrationForm.controls['portalAddress'].value);
      this.list.push(this.StudentRegistrationForm.controls['personalAddress'].value);
      this.list.push(this.StudentRegistrationForm.controls['gender'].value);
      this.list.push(this.StudentRegistrationForm.controls['EmailId'].value);
      this.list.push(this.StudentRegistrationForm.controls['DOB'].value);
      this.list.push(this.StudentRegistrationForm.controls['city'].value);
      this.list.push(this.StudentRegistrationForm.controls['course'].value);
      this.list.push(this.StudentRegistrationForm.controls['district'].value);
      this.list.push(this.StudentRegistrationForm.controls['state'].value)*/
     // console.log(this.list );
      this.localStorage.setItem('user11', this.details).subscribe(() => {});
      //var r=this.localStorage.getItem('user1')scribe((data) => {
       // data});.sub
      console.log('avx')
      console.log(this.localStorage.getItem('user1').subscribe((data) => {
        data; // null
      }));


      //this.router.navigate([url]);
  }



}
