import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from '../app/signup/signup.component';
import {SideNavComponent} from '../app/side-nav/side-nav.component'
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import {AllProjectsComponent} from '../app/Components/Projects/all-projects/all-projects.component'
import {CreateProjectComponent} from '../app/Components/Projects/create-project/create-project.component'
<<<<<<< Updated upstream
import {UpdateProjectComponent} from '../app/Components/Projects/update-project/update-project.component'

=======
import { CategoryComponent } from './Components/Request/Categories/category/category.component';
<<<<<<< Updated upstream
import { ClientsComponent } from './Components/Clients/clients.component';
import { CreateRequesteComponent } from './Components/Request/create-requeste/create-requeste.component';
import { DepartmentComponent } from './Components/Department/department.component';
>>>>>>> Stashed changes
=======
import { ClientsComponent } from './Components/clients/clients.component';
import { AllUsersComponent } from './Components/all-users/all-users.component';
import { DisplayAllEmployeesComponent } from './Components/employee/display-all-employees/display-all-employees.component';
import { AddEmployeeComponent } from './Components/employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Components/employee/edit-employee/edit-employee.component';
import { ChangePaswwordComponent } from './Components/change-paswword/change-paswword.component';
>>>>>>> Stashed changes
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component:  SignupComponent},
  { path: 'changePassword', component:  ChangePaswwordComponent},
    { path: 'home', component: HomeComponent ,children:[
    { path: 'tabs', component:  AllProjectsComponent},
<<<<<<< Updated upstream
=======
    { path: 'Category', component:  CategoryComponent},
    { path: 'client', component:  ClientsComponent},
<<<<<<< Updated upstream
    { path: 'department', component:  DepartmentComponent},
    { path: 'Requests', component:  CreateRequesteComponent},
>>>>>>> Stashed changes
=======
    {path:'AllUsers',component:AllUsersComponent},
    { path: 'employee', component:DisplayAllEmployeesComponent},
    { path: 'addemployee', component:AddEmployeeComponent },
    { path: 'editEmployee/:empId', component:EditEmployeeComponent },
>>>>>>> Stashed changes
    { path: 'tabs/createProject', component:  CreateProjectComponent},
    { path: 'tabs/updateproject/:id', component:  UpdateProjectComponent},

]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
