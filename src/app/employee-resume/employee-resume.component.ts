import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-resume',
  template: `
  <div class="container">
    <header class="header">
        <button (click)="goBack()" class="backBtn"> < </button>
        <h2 class="heading">Resume of {{employee.info.firstName+ " "+employee.info.lastName}}</h2>

    </header>
    <div class="content">
      <nav>
          <a  (click)="infoClicked()"   >Info</a>
          <a  (click)="projectsClicked()" >Projects</a>
          <a  (click)="hobbiesClicked()" >Hobbies</a>
          <a  (click)="notesClicked()" >Notes</a>
          <div class="animation"></div>
      </nav>

      <div *ngIf="projectsStatus; then projectsBlock"></div>
      <div *ngIf="infoStatus; then infoBlock"></div>
      
      <div *ngIf="hobbiesStatus; then hobbiesBlock"></div>
      <div *ngIf="notesStatus; then notesBlock"></div>
      
      <ng-template #projectsBlock>
        <p class="details" >Projects of {{employee.info.firstName + " " + employee.info.lastName + " -"}}</p>
        <div class="tempDiv">
        <ul *ngFor = "let project of employee.projects">
          <li >{{project.project1}}</li>
        </ul>
        </div>
        
      </ng-template>
      <ng-template #infoBlock>
        <p class="details">Information of {{employee.info.firstName + " " + employee.info.lastName}}</p>  
        <div class="tempDiv">
        <table>
          <tr>
              <td class="field">First Name : </td>
              <td class="value">{{employeeInfo.firstName}} </td>
          </tr>
          <tr>
              <td class="field">Last Name : </td>
              <td class="value">{{employeeInfo.lastName}} </td>
          </tr>
          <tr>
              <td class="field">Address : </td>
              <td class="value">{{employeeInfo.address}} </td>
          </tr>
          <tr>
              <td class="field">City : </td>
              <td class="value">{{employeeInfo.city}} </td>
          </tr>
          <tr>
              <td class="field">Postal-Code : </td>
              <td class="value">{{employeeInfo.postalCode}} </td>
          </tr>
          <tr>
              <td class="field" >Phone(Home) : </td>
              <td class="value">{{employeeInfo.phone}} </td>
          </tr>
          <tr>
              <td class="field">Country : </td>
              <td class="value">{{employeeInfo.country}} </td>
          </tr>
      </table>     
      </div>
      </ng-template>
      <ng-template #hobbiesBlock>
        <p class="details">Hobbies of {{employee.info.firstName + " " + employee.info.lastName}}</p>
        <div class="tempDiv">
        <ul *ngFor = "let hobby of employee.hobbies">
          <li >{{hobby.hobby1}}</li>
        </ul>
        </div>        
      </ng-template>
      <ng-template #notesBlock>
        <p class="details">Notes of {{employee.info.firstName + " " + employee.info.lastName}}</p>
        <div class="tempDiv">
        <p>{{employee.notes.note}}</p>     
        </div>   
      </ng-template>
    </div>
  
  </div>
  `,
  styles: [`
    .tempDiv{
      margin-left: 30px;
    }
    
    .heading{
      display: flex;
      justify-content: center;
      font-family: sans-serif;
      font-size: xxx-large;
      color: #618685;
    }
    .details{
      margin-left: 30px;
      margin-top: 20px;
      font-family: sans-serif;
      font-weight: bold;
      color: #34495e;
      
    }
    nav{
      position: relative;
      margin: auto;
      width: auto;
      height: 50px;
      background: #34495e;
      border-radius: 5px;
      font-size: 0px;
      box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.6);
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
  nav a{
      font-size: 15px;
      text-transform: uppercase;
      color: white;
      text-decoration: none;
      line-height: 50px;
      position: relative;
      z-index: 1;
      display: inline-block;
      text-align: center;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  nav .animation{
      position: absolute;
      height: 8%;
      bottom: 0;
      z-index: 0;
      background-color: #80ced6;
      border-radius: 5px;
      transition: all 0.5s ease 0s;
  }

  a:nth-child(1){
      width: 120px;
  }
  nav .start-info, a:nth-child(1):hover~.animation{
      width: 60px;
      left: 30px; 
  }
  
  nav a:active{
    color: #1abc9c; 
  }

  a:nth-child(2){
      width: 120px;
  }
  nav .start-projects, a:nth-child(2):hover~.animation{
      width: 80px;
      left: 140px; 
  }
  a:nth-child(3){
      width: 120px;
  }
  nav .start-hobbies, a:nth-child(3):hover~.animation{
      width: 80px;
      left: 262px; 
  }
  a:nth-child(4){
      width: 100px;
  }
  nav .start-notes, a:nth-child(4):hover~.animation{
      width: 60px;
      left: 380px; 
  }`
  ]
})
export class EmployeeResumeComponent implements OnInit {

  public empId;
  public employees=[]; 
  public employee;
  public employeeInfo;
  public infoStatus: boolean ;
  public projectsStatus: boolean  ;
  public hobbiesStatus: boolean;
  public notesStatus: boolean;
  constructor(private _employeeService : EmployeeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) =>{
      let id = parseInt(params.get('id'));
      this.empId=id;
    });

    this.employees =this._employeeService.getEmployees();
    this.employees.forEach(emp => {
         if(this.empId === emp.info.id)
         {this.employee = emp;
         this.employeeInfo = emp.info;}
       });

    // this._employeeService.getEmployees().subscribe(data => {
    //   this.employees =data;
    //   console.log(this.employees);
    //   this.employees.forEach(emp => {
    //   if(this.empId === emp.info.id)
    //   {this.employee = emp;
    //   this.employeeInfo = emp.info;}
    // });
    // });
    
  }
  goBack(){
    this.router.navigate(['/emplist/'+ this.empId]);
  }
  infoClicked()
  {  
    this.infoStatus = true;
    this.projectsStatus=false;
    this.hobbiesStatus=false;
    this.notesStatus=false;
  }
  projectsClicked()
  {
    this.infoStatus = false;
    this.projectsStatus=true;
    this.hobbiesStatus=false;
    this.notesStatus=false;
  }
  hobbiesClicked()
  {
    this.infoStatus = false;
    this.projectsStatus=false;
    this.hobbiesStatus=true;
    this.notesStatus=false;
  }
  notesClicked()
  {
    this.infoStatus = false;
    this.projectsStatus=false;
    this.hobbiesStatus=false;
    this.notesStatus=true;
  }
}



