import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from "./employee";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees=[];
  private _url : string ="../assets/employees.json";
  constructor(private http : HttpClient) {
    // this.getEmployees().subscribe(data => this.employees=data);
    // console.log(this.employees);
   }

  getEmployees() : Observable<IEmployee[]>{
    const url =this._url;
    return this.http.get<IEmployee[]>(url);
  }
}
