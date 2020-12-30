import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './Components/Signup/signup.component';
import {SideNavComponent} from './Components/Side-nav/side-nav.component'
import { HomeComponent } from './Components/Home/home.component';
import { NavBarComponent } from './Components/Nav-bar/nav-bar.component';
import {AllProjectsComponent} from '../app/Components/Projects/all-projects/all-projects.component'
import {CreateProjectComponent} from '../app/Components/Projects/create-project/create-project.component'

import {UpdateProjectComponent} from '../app/Components/Projects/update-project/update-project.component'
// import { CategoryComponent } from './Components/Request/Categories/category/category.component';
// import { ClientsComponent } from './Components/Clients/clients.component';
// import { DepartmentComponent } from './Components/Department/department.component';
import { CategoryComponent } from './Components/Request/Categories/category/category.component';
import { ClientsComponent } from './Components/Clients/clients.component';
import { CreateRequesteComponent } from './Components/Request/create-requeste/create-requeste.component';
import { DepartmentComponent } from './Components/Department/department.component';
import { ChangePaswwordComponent } from './Components/change-paswword/change-paswword.component';
import { DisplayAllEmployeesComponent } from './Components/employee/display-all-employees/display-all-employees.component';
import { AllUsersComponent } from './Components/all-users/all-users.component';
import { AddEmployeeComponent } from './Components/employee/add-employee/add-employee.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component:  SignupComponent},
  { path: 'changePassword', component:  ChangePaswwordComponent},
  { path: 'home', component: HomeComponent ,children:[
    { path: 'tabs', component:  AllProjectsComponent},
    { path: 'Category', component:  CategoryComponent},
    { path: 'client', component:  ClientsComponent},
    { path: 'department', component:  DepartmentComponent},
    { path: 'Requests', component:  CreateRequesteComponent},
    { path: 'tabs/createProject', component:  CreateProjectComponent},
    { path: 'tabs/updateproject/:id', component:  UpdateProjectComponent},
    {path:'AllUsers',component:AllUsersComponent},
    { path: 'employee', component:DisplayAllEmployeesComponent},
    { path: 'addemployee', component:AddEmployeeComponent },
    { path: 'editEmployee/:empId', component:AddEmployeeComponent },
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
