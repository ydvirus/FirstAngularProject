import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {Router} from '@angular/router';
import {IEmployee} from '../employee';
import { Employeenames } from "../employeenames";

@Component({
  selector: 'app-employee-list',
  template: `
  <div class="container">
          
    <header class="header">
        <button (click)="goBack()" class="backBtn"> < </button>
        <h2 class="heading">Employee List</h2>
    </header>
    <div class="content">
        <div class="searchSection">
          <label for="search" class="searchLabel" >Search </label>
          <input type="text" [(ngModel)]="searchValue" class="searchInput" />
        </div>
        <h3>List of Employees</h3>
        <ul *ngFor = "let emp of employeename | searchfilter:searchValue">
            <li (click)="onSelect(emp)" >{{emp.firstName +" "+emp.lastName}} </li><span (click)="onSelect(emp)" class="empId"> {{">"}}</span>
        </ul>

    </div>
    

  </div>
  `,
  styles: [`
  .empId{
    justify-content: center;
    z-index: 1;
    display: flex;
    align-items: center;
    width: 10%;
    background: white;
    color: #618685;
    font-weight: 200;
    font-size: 20px;
   
  }
  .searchInput{
    width: 500px;
    height: 30px;
    border: 1px solid #33495e;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.6);
    margin-left: 15px;
  }
  .searchLabel{
    font-family: sans-serif;
    font-size: 18px;
    color: #33495e;
  }
  .searchSection{
    display: flex;
    align-items: center;
    margin-left: 0px;
    justify-content: center;
    margin-top: 20px;
  }
  h3{
   
    margin-left: 0;
    color: #34495e;
    padding: 10px;
    margin-right: 0;
    justify-content: center;
    z-index: 1;
    align-items: center;
    padding-right: 0px;
    width: auto;
    padding-left: 110px;
    font-size: 35px;
    border-bottom: 5px solid white;
    border-top: 5px solid white;
  }
  ul{
    margin-left: 110px;
    text-decoration: none;
    display : flex;
    width: 70%;
    margin-bottom: 0px;
    margin-top: 0px;
    border: 1px solid #33495e;
    padding-left: 0px;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.6);
  }
  li{
    list-style: none;
    font-size: x-large;
    color: #618685;
    width: 90%;
    
    justify-content: left;
    display: flex;
    background: white;
   
    align-items: center;
    vertical-align: middle;
    z-index: 1;
    
    height: 55px;
    padding-left: 18px;
  }
  .content{
    margin: 0;
    font-family: sans-serif;
    justify-content: center;
    z-index: 1;
    align-items: center;
  }
  .heading{
    display: flex;
    justify-content: center;
    font-family: sans-serif;
    font-size: xxx-large;
    margin-top: 10px;
    margin-bottom: 20px;
    color:  #618685;
  }
  .backBtn{
    padding: 0;
    margin: 10px;
    width: 35px;
    height: 35px;
    color: #34495e;
    background: white;
    border-radius: 18px;
    border: 2px solid #34495e;
    font-size: larger;
    font-style: italic;
    justify-content: center;
    text-align: center;
    z-index: 1;
    display: flow-root;
    font-weight: bold;
  }
  `
  ]
})
export class EmployeeListComponent implements OnInit {

  public employees:any  = [];
  public employeename: Employeenames[] = []; 
  public searchValue: string;
  public empNamesSortedById;
  constructor(private _employeeService : EmployeeService, private router: Router){}

  ngOnInit(): void {
    
    
    this.employees =this._employeeService.getEmployees();
    this.employees.forEach(emp => {
         this.employeename.push({id: emp.info.id, firstName:emp.info.firstName, lastName:emp.info.lastName});
       });

    // this._employeeService.getEmployees().subscribe(data => {
    //   console.log(data);
    //   this.employees=data;
    //   this.employees.forEach(emp => {
    //     this.employeename.push({id: emp.info.id, firstName:emp.info.firstName, lastName:emp.info.lastName});
    //   });
      
      
      //this.empNamesSortedById =sortById(this.employeename);
      //console.log(this.empNamesSortedById);
      
      this.employeename.sort((a, b)=>{
        if(a.id >b.id)
        {return 1;}
        else if(a.id<b.id) 
        {return -1;}
        else return 0;
      });
      console.log(this.employeename);

   
    //console.log("Hi "+this.employees[2]);
    // this.employees.forEach(empl => {
    //    console.log(empl.id);
    //  });
    
  }

  onSelect(employee){
    this.router.navigate(['/emplist', employee.id]);
  }
  
  goBack(){
    this.router.navigate(['/home']);
  }

}
