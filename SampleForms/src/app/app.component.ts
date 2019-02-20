import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {LocalStorage} from "@ngx-pwa/local-storage";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstname;
  fathersName;
  portalAddress;personalAddress;
  gender;
  pinCode;
  EmailId;
  DOB;
  MobileNo;
  city;
  course;
  district;
  state;
  constructor(private localStorage : LocalStorage) {
    this.localStorage.getItem('user1').subscribe((user) => {
      this.firstname=user.name;

      this.fathersName=user.fathersName;
      this.portalAddress=user.portalAddress;
      this.personalAddress=user.personalAddress;
      this.gender=user.gender;
      this.pinCode=user.pinCode;
      this.EmailId=user.EmailId;
      this.DOB=user.DOB;
      this.MobileNo=user.MobileNo;
      this.city=user.city;
      this.course=user.course;
      this.district=user.district;
      this.state=user.state;

    });
  }

}
/*
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
 */
