import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div>
  <h2 class="heading">Home</h2>
  </div>
  <p>
    <button class="processButton" >Display Not Found</button>
    <button class="processButton" routerLink ="/emplist" >Show Employee List</button>
  </p>

  `,
  styles: [
    `
    .heading{
      display: flex;
      justify-content: center;
      font-family: sans-serif;
      font-size: xxx-large;
      color: #618685;
    }
    p{
      margin-left: 50px;
      display: flex;
      width: 100%;
      height: fit-content;
      align-items: center;
      z-index: 1;
      justify-content: center;
    }
    .processButton
    {
      width: fit-content;
      height: 35px;
      margin-right: 30px;
      margin-top: 20px;
      padding-left: 10px;
      padding-right: 10px;
      border: none;
      color: white;
      background: #34495e;
      border-radius: 28px;
    }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
