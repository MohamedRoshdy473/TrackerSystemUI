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
import { ClientsComponent } from './Components/ClientComponents/clients/clients.component';
import { CreateRequesteComponent } from './Components/Request/Create-requeste/create-requeste.component';
import { DepartmentComponent } from './Components/DepartmentComponents/Department/department.component';
import { ChangePaswwordComponent } from './Components/change-paswword/change-paswword.component';
import { AllUsersComponent } from './Components/All-users/all-users.component';
import { DisplayAllEmployeesComponent } from './Components/employee/display-all-employees/display-all-employees.component';
import { AddEmployeeComponent } from './Components/employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Components/employee/edit-employee/edit-employee.component';
import { AllClientRequestsComponent } from './Components/Request/All-client-requests/all-client-requests.component';
import { AddOrganizationComponent } from './Components/Organization/add-organization/add-organization.component';
import { ListOrganizationsComponent } from './Components/Organization/list-organizations/list-organizations.component';
import { EditOrganizationComponent } from './Components/Organization/edit-organization/edit-organization.component';
import { AllManagerRequestsComponent } from './Components/Request/All-manager-requests/all-manager-requests.component';
import { DisplayAllClientsComponent } from './Components/ClientComponents/display-all-clients/display-all-clients.component';
import { EditClientComponent } from './Components/ClientComponents/edit-client/edit-client.component';
import { DisplayDepartmentsComponent } from './Components/DepartmentComponents/display-departments/display-departments.component';
import { EditDepartmentComponent } from './Components/DepartmentComponents/edit-department/edit-department.component';
import { ProjectTypeComponent } from './Components/ProjectTypeComponents/project-type/project-type.component';
import { AddProjectTypeComponent } from './Components/ProjectTypeComponents/add-project-type/add-project-type.component';
import { EditProjectTypeComponent } from './Components/ProjectTypeComponents/edit-project-type/edit-project-type.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'changePassword', component:  ChangePaswwordComponent},
  { path: 'login', component:  SignupComponent},
  { path: 'home', component: HomeComponent ,children:[
    { path: 'tabs', component:  AllProjectsComponent},
    { path: 'Category', component:  CategoryComponent},
    { path: 'client', component:  ClientsComponent},
    { path: 'department', component:  DepartmentComponent},
    { path: 'DisplayAllClients', component:  DisplayAllClientsComponent},
    { path: 'editClient/:id', component:  EditClientComponent},
    { path: 'DisplayDepartments', component:  DisplayDepartmentsComponent},
    { path: 'editDepartment/:id', component:  EditDepartmentComponent},
    { path: 'ProjectTypes', component:  ProjectTypeComponent},
    { path: 'AddProjectType', component:  AddProjectTypeComponent},
    { path: 'editProjectType/:id', component:  EditProjectTypeComponent},
    { path: 'Requests', component:  CreateRequesteComponent},
    { path: 'ManagerRequests', component:  AllManagerRequestsComponent},
    { path: 'tabs/createProject', component:  CreateProjectComponent},
    { path: 'tabs/updateproject/:id', component:  UpdateProjectComponent},
    {path:'AllUsers',component:AllUsersComponent},
    { path: 'employee', component:DisplayAllEmployeesComponent},
    { path: 'addemployee', component:AddEmployeeComponent },
    { path: 'allClientReqts', component:AllClientRequestsComponent },
    { path: 'organization', component:AddOrganizationComponent },
    { path: 'organizations', component:ListOrganizationsComponent },
    { path: 'organization', component:AddOrganizationComponent },
    { path: 'editOrganization/:id', component:EditOrganizationComponent },
    { path: 'editEmployee/:empId', component:EditEmployeeComponent },
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
