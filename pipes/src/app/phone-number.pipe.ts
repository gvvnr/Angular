import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {
  num="";
  transform(phoneNumber: String, args?: any): any {

    return phoneNumber.toString().slice(0,3)+"-"+phoneNumber.toString().slice(4,9);
  }

}
