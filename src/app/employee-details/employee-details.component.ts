import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-details',
  template: `
  <div class="container">
  <header class="header">
      <button (click)="goBack()" class="backBtn"> < </button>
      
      
      <h2 class="heading">Employee Details of {{employeeInfo.firstName+ " "+employeeInfo.lastName}}</h2>
  </header>
  <div class="content">
          <div class="flipBtnBar">
          <h3>Employee ID : {{employeeInfo.id}}</h3>
          <button (click)="flipResume(employeeInfo)" class="flipBtn">Flip to Resume</button>
          </div>
          
      <div class="bodyPart">   
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
      <div class="imgDiv" >
        <img class="imageTag" src={{image}}/>
      </div>
      </div>

  </div>
  
</div>
    
  `,
  styles: [`
  .bodyPart{
    display: flex;
    justify-content: center;
  }
  .imgDiv{
    
    float: right;
    justify-content: center;
    z-index: 1;
    
    width: fit-content;
    margin: 20px;
    margin-top: 100px;
  }
  

  .imageTag{
    width: 170px;
    float: right;
    margin: 0;
    height: inherit;
    border: 5px solid #33495e;
    background: #33495e;
  }
  .flipBtn{
    margin-left: 0px;
    margin-top: 0px;
    padding-left: 10px;
    padding-right: 10px;
    width: 150px;
    height: 35px;
    border: 0px;
    background: #34495e;
    border-radius: 18px;
    color: white;
    
    align-items: center;
    justify-content: center;
    z-index: 1;
    vertical-align: middle;
    text-align: center;
  }
  .field{
    text-align: right;
  }
  .value{
    text-align: left;
    width: 300px;
    padding-left: 20px;
  }

  .headingBar{
    display: block;
  }

  body{
    margin: 0;
  }
  .heading{
    display: flex;
    justify-content: center;
    font-family: sans-serif;
    font-size: xxx-large;
    color: #618685;
    margin-top: 15px;
    margin-bottom: 20px;
  }
  h3{
    margin: 0;
    padding-right: 0px;
    width: auto;
    padding-left: 10%;
    font-size: 35px;
    color: #34495e;
    padding-top: 10px;
    padding-bottom: 10px;    
    justify-content: center;
    z-index: 1;
    align-items: center;
    margin-right: 50%
    
  }
  .flipBtnBar{
    display: flex;
    border-bottom: 5px solid white;
    
    z-index: 1;
    align-items: center;
    border-top: 5px solid white;
  }
  .content{
    margin: 0;
    font-family: sans-serif;
    justify-content: center;
    z-index: 1;
    align-items: center;
  }
  table{
    margin-top: 100px;
    
    justify-content: center;
    color: #34495e;
    font-size: larger;
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
  }`
  ]
})
export class EmployeeDetailsComponent implements OnInit {

  public employees =[];
  public empId;
  public employeeInfo=null;
  public image:string;
  constructor(private _employeeService : EmployeeService,
              private activatedRoute : ActivatedRoute, 
              private router: Router) { }

  ngOnInit(): void {

    this._employeeService.getEmployees().subscribe(data =>{ 
      this.employees =data;
      console.log(this.employees);
      this.employees.forEach(emp => {
        if (this.empId === emp.info.id) {
          this.employeeInfo=emp.info;
          this.image = emp.image;
        }
      });
    });
    console.log('reached here');
    //console.log(this.employees[0].firstName);

    console.log('reached here');
    
    this.activatedRoute.paramMap.subscribe((params: ParamMap) =>{
      let id = parseInt(params.get('id'));
      this.empId=id;
      
    }
    );
    
    
    //Not using snapshot method
    
    //let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    //this.empId = id;
    
    // using paramMap Observable-

  }

  goBack(){
    this.router.navigate(['/emplist']);
  }

  flipResume(e){
    this.employeeInfo=e;
    this.router.navigate(['emplist/'+ this.employeeInfo.id+'/resume']);
  }
}
