import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from "./employee";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees=[];
  private _url : string ="https://github.com/ydvirus/FirstAngularProject/blob/master/src/assets/employees.json";
  constructor(private http : HttpClient) {
    // this.getEmployees().subscribe(data => this.employees=data);
    // console.log(this.employees);
   }

//   getEmployees() : Observable<IEmployee[]>{
//     const url =this._url;
//     return this.http.get<IEmployee[]>(url);
//   }

  getEmployees() {
    return [
   
    {
      "info":{"id":2, 
        "firstName":"Andrew", 
        "lastName":"Fuller", 
        "address":"507-20th Ave E Apt 2A",
        "city":"Seattle,WA", 
        "postalCode":58122, 
        "phone":"(209)555-9857", 
        "country":"USA" 
        },
      "projects":[
        {"project1":"p1"},
        {"project1":"p2"}
      ],
      "hobbies":[
        {"hobby1":"video games"},
        {"hobby1":"coding on Online plateform"},
        {"hobby1":"Watching Movies and web series"}
      ],
      "notes":{
        "note":"Andrew is a nice guy."
      },
      "image": "../assets/male1.jpg"
        
        
      
    },
    {
      "info":{"id":1,
        "firstName":"Nancy",
        "lastName":"Davolio", 
        "address":"507-20th Ave E Apt 2A",
        "city":"Seattle,WA", 
        "postalCode":98122, 
        "phone":"(209)555-9857", 
        "country":"USA" },
      "projects":[
        {"project1":"p1"},
        {"project1":"p2"},
        {"project1":"p3"}
      ],
      "hobbies":[
        {"hobby1":"listning music"},
        {"hobby1":"compititive-coding"},
        {"hobby1":"gaming"}
      ],
      "notes":{
        "note":"Nancy is Intern from 06 Jan 2020"
      },
      "image": "../assets/female1.jpg"
        
          
    },
    {
      "info":{"id":3, 
        "firstName":"Jenet", 
        "lastName":"Leverling", 
        "address":"507-20th Ave E Apt 2A",
        "city":"Seattle,WA", 
        "postalCode":98188, 
        "phone":"(209)555-9857", 
        "country":"USA"
      },
      "projects":[
        {"project1":"p1"},
        {"project1":"p2"},
        {"project1":"p3"}
      ],
      "hobbies":[
        {"hobby1":"Swimming"},
        {"hobby1":"Reading Novels"},
        {"hobby1":"Internet Surfing"}
      ],
      "notes":{
        "note":"Jenet is working as HR in PS"
      },
      "image": "../assets/female2.jpg"
        
      
    },{
      "info":{"id":5, 
        "firstName":"Steven", 
        "lastName":"Buchanan", 
        "address":"507-20th Ave E Apt 2A",
        "city":"Seattle,WA", 
        "postalCode":98122, 
        "phone":"(209)555-9857", 
        "country":"USA" },
      "projects":[
        {"project1":"p10"},
        {"project1":"p18"},
        {"project1":"p31"}
      ],
      "hobbies":[
        {"hobby1":"Editing Videos"},
        {"hobby1":"Compititive-Coding"},
        {"hobby1":"Food"}
      ],
      "notes":{
        "note":"notes notes notes"
      },
      "image": "../assets/male2.jpg"
        
        
      
    },{
      "info":{"id":4, 
        "firstName":"Margaret", 
        "lastName":"Peacock", 
        "address":"507-20th Ave E Apt 2A",
        "city":"Seattle,WA", 
        "postalCode":28122, 
        "phone":"(209)555-9857", 
        "country":"USA" },
      "projects":[
        {"project1":"p1"},
        {"project1":"p1.1"},
        {"project1":"p3"},
        {"project1":"p4"},
        {"project1":"p6"},
        {"project1":"p10"}
      ],
      "hobbies":[
        {"hobby1":"listning music"},
        {"hobby1":"Learning about History"}
        
      ],
      "notes":{
        "note":"Woking as Full Time in Persistent"
      },
      "image": "../assets/female3.jpg"
        
        
      
    },{
      "info":{"id":10, 
        "firstName":"Marry", 
        "lastName":"Feather", 
        "address":"507-20th Ave E Apt 2A",
        "city":"Seattle,WA", 
        "postalCode":28122, 
        "phone":"(209)555-9857", 
        "country":"USA" },
      "projects":[
        {"project1":"p1"},
        {"project1":"p1.1"},
        {"project1":"p3"},
        {"project1":"p4"},
        {"project1":"p6"},
        {"project1":"p10"}
      ],
      "hobbies":[
        {"hobby1":"listning music"},
        {"hobby1":"Learning about History"}
        
      ],
      "notes":{
        "note":"Woking as Full Time in Persistent"
      },
      "image": "../assets/female4.jpg"
        
        
      
    },{
      "info":{"id":8, 
        "firstName":"Jerry", 
        "lastName":"Hills", 
        "address":"507-20th Ave E Apt 2A",
        "city":"Seattle,WA", 
        "postalCode":28122, 
        "phone":"(209)555-9857", 
        "country":"USA" },
      "projects":[
        {"project1":"p1"},
        {"project1":"p1.1"},
        {"project1":"p3"},
        {"project1":"p4"},
        {"project1":"p6"},
        {"project1":"p10"}
      ],
      "hobbies":[
        {"hobby1":"listning music"},
        {"hobby1":"Learning about History"}
        
      ],
      "notes":{
        "note":"Woking as Full Time in Persistent"
      },
      "image": "../assets/male4.jpg"
        
        
      
    }

  ];
  }
}
