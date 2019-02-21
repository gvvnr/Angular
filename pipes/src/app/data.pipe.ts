import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentData'
})
export class DataPipe implements PipeTransform {

  transform(fullname: any, value1 :string): string {
    if(value1=="Male"){
      return "Mr "+ fullname.charAt(0).toLocaleUpperCase()+""+fullname.slice(1,fullname.indexOf(' ')+1)+""+fullname.charAt(fullname.indexOf(' ')+1).toUpperCase()+""+fullname.slice(fullname.indexOf(' ')+2,fullname.length);

    }
    else if (value1=="Female"){
      return "Ms "+fullname.charAt(0).toLocaleUpperCase()+""+fullname.slice(1,fullname.indexOf(' ')+1)+""+fullname.charAt(fullname.indexOf(' ')+1).toUpperCase()+""+fullname.slice(fullname.indexOf(' ')+2,fullname.length);


    }

  }

}
