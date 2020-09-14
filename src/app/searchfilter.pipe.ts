import { Pipe, PipeTransform } from '@angular/core';
import { IEmployee } from './employee';
import { Employeenames } from './employeenames';


@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(employees : Employeenames[], searchValue: string): any{
    if(!employees || searchValue=="" || !searchValue){
    return employees ;
    }
    return employees.filter(employee => 
      employee.firstName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      employee.lastName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) 
      
      );
  }

}
