import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Validators } from '@angular/forms';
import {Router} from "@angular/router";
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  list = [];
  value={};
  constructor(private fb: FormBuilder, private router: Router, private localStorage: LocalStorage) {
    this.createForm();

  }
  public StudentRegistrationForm : FormGroup;

  cities = ['Hyderabad', 'bangalore', 'chennai']
  courses =['computer Science','Mechanical Engineering'];
  districts=['Guntur','nellore','vijayawada'];
  states=['Andhra Pradesh','Telangana','punjab'];
  details =[];
  createForm() {
    this.StudentRegistrationForm = this.fb.group({
      name: ['', Validators.required ],
      fathersName: ['', Validators.required ],
      portalAddress: ['', Validators.required ],
      personalAddress:['', Validators.required ],
       gender: ['', Validators.required ],
      pinCode: ['', Validators.required ],
      EmailId: ['', Validators.required ],
      DOB: ['', Validators.required ],
      MobileNo: ['', Validators.required ],
      city:['', Validators.required ],
      course:['', Validators.required ],
      district:['', Validators.required ],
      state:['', Validators.required ],
    });
  }
  ngOnInit() {


  }


  displayName(formData) {

    //console.log(this.StudentRegistrationForm.value);

    localStorage.setItem('user',this.StudentRegistrationForm.value).subscribe(() => {});
   // localStorage.setItem("username", "John");
    this.value = localStorage.getItem('user');
    console.log(this.value);

// Access some stored data
    //alert("username = " + localStorage.getItem("user"));

    this.router.navigate(['']);
  }
}
/*  this.details.push(this.StudentRegistrationForm.controls['fullName'].value ,this.StudentRegistrationForm.controls['fathersName'].value);
this.list.push(this.StudentRegistrationForm.controls['portalAddress'].value);
 this.list.push(this.StudentRegistrationForm.controls['personalAddress'].value);
 this.list.push(this.StudentRegistrationForm.controls['gender'].value);
 this.list.push(this.StudentRegistrationForm.controls['EmailId'].value);
 this.list.push(this.StudentRegistrationForm.controls['DOB'].value);
 this.list.push(this.StudentRegistrationForm.controls['city'].value);
 this.list.push(this.StudentRegistrationForm.controls['course'].value);
 this.list.push(this.StudentRegistrationForm.controls['district'].value);
 this.list.push(this.StudentRegistrationForm.controls['state'].value)


*/
