import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { EmployeeResumeComponent } from './employee-resume/employee-resume.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path : 'home', component: HomeComponent},
  { path : 'emplist', component: EmployeeListComponent},
  { path : 'emplist/:id', component: EmployeeDetailsComponent},
  { path : 'emplist/:id/resume', component: EmployeeResumeComponent },
  { path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ HomeComponent,EmployeeListComponent, EmployeeDetailsComponent,
  ErrorComponent, EmployeeResumeComponent

];