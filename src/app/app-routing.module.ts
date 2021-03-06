import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './Components/Signup/signup.component';
import { SideNavComponent } from './Components/Side-nav/side-nav.component'
import { HomeComponent } from './Components/Home/home.component';
import { NavBarComponent } from './Components/Nav-bar/nav-bar.component';
import { AllProjectsComponent } from '../app/Components/Projects/all-projects/all-projects.component'
import { CreateProjectComponent } from '../app/Components/Projects/create-project/create-project.component'

import { UpdateProjectComponent } from '../app/Components/Projects/update-project/update-project.component'
// import { CategoryComponent } from './Components/Request/Categories/category/category.component';
// import { ClientsComponent } from './Components/Clients/clients.component';
// import { DepartmentComponent } from './Components/Department/department.component';
import { CategoryComponent } from './Components/Request/Categories/category/category.component';
import { ClientsComponent } from './Components/ClientComponents/Add-clients/clients.component';
import { CreateRequesteComponent } from './Components/Request/Manager-Create-requeste/create-requeste.component';
import { DepartmentComponent } from './Components/DepartmentComponents/Department/department.component';
import { ChangePaswwordComponent } from './Components/Profile/Change-paswword/change-paswword.component';
import { AllUsersComponent } from './Components/All-users/all-users.component';
import { DisplayAllEmployeesComponent } from './Components/employee/display-all-employees/display-all-employees.component';
import { AddEmployeeComponent } from './Components/employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Components/employee/edit-employee/edit-employee.component';
import { AllClientRequestsComponent } from './Components/Request/All-client-requests/all-client-requests.component';
import { AddOrganizationComponent } from './Components/Organization/add-organization/add-organization.component';
import { ListOrganizationsComponent } from './Components/Organization/list-organizations/list-organizations.component';
import { EditOrganizationComponent } from './Components/Organization/edit-organization/edit-organization.component';
import { AllManagerRequestsComponent } from './Components/Request/All-manager-requests/all-manager-requests.component';
import { AssignRequestsComponent } from "./Components/Request/Assign-requests/assign-requests.component";
import { DisplayAllClientsComponent } from './Components/ClientComponents/display-all-clients/display-all-clients.component';
import { ClientCreateRequestComponent } from './Components/Request/Client-create-request/client-create-request.component';
import { DisplayDepartmentsComponent } from './Components/DepartmentComponents/display-departments/display-departments.component';
import { EditDepartmentComponent } from './Components/DepartmentComponents/edit-department/edit-department.component';
import { ProjectTypeComponent } from './Components/ProjectTypeComponents/project-type/project-type.component';
import { AddProjectTypeComponent } from './Components/ProjectTypeComponents/add-project-type/add-project-type.component';
import { EditProjectTypeComponent } from './Components/ProjectTypeComponents/edit-project-type/edit-project-type.component';
import { DisplayCategoriesComponent } from './Components/Request/Categories/display-categories/display-categories.component';
import { EmployeeAssignedRequestsComponent } from './Components/employee/All-employee-assigned-requests/employee-assigned-requests.component';
import { AllTeamLeaderRequestsComponent } from './Components/Request/All-team-leader-requests/all-team-leader-requests.component';
import { AllProjectmanagerProjectsComponent } from './Components/Projects/all-projectmanager-projects/all-projectmanager-projects.component';
import { AllClientsForProjectmanagerComponent } from './Components/ClientComponents/all-clients-for-projectmanager/all-clients-for-projectmanager.component';
import { ProjectmangerRequestsComponent } from './Components/Request/All-projectmanger-requests/projectmanger-requests.component';
import { AssignemployeeRequestComponent } from './Components/Request/assignemployee-request/assignemployee-request.component';
import { EditClientComponent } from './Components/ClientComponents/edit-client/edit-client.component';
import { ProfileComponent } from './Components/Profile/Profile/profile.component';
// import { PiechartComponent } from './Components/Pichart/piechart/piechart.component';
import { PiechartComponent } from "./Components/Dashboard/SuperAdminpiechart/piechart.component";
import { ProjectmanagerDashboardComponent } from './Components/Dashboard/projectmanager-dashboard/projectmanager-dashboard.component';
import { TeamleaderDashboardComponent } from './Components/Dashboard/teamleader-dashboard/teamleader-dashboard.component';
import { DisplayAssetsComponent } from './Components/Assets/display-assets/display-assets.component';
import { AddAssetsComponent } from './Components/Assets/add-assets/add-assets.component';
import { UpdateAssetsComponent } from './Components/Assets/update-assets/update-assets.component';
// import { PiechartComponent } from './Components/Pichart/piechart/piechart.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: SignupComponent },
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'tabs', component: AllProjectsComponent },
      { path: 'Category', component: CategoryComponent },
      { path: 'client', component: ClientsComponent },
      { path: 'piechart', component: PiechartComponent },
      { path: 'editClient/:id', component: EditClientComponent },
      { path: 'editClient/:id', component: EditClientComponent },
      { path: 'department', component: DepartmentComponent },
      { path: 'changePassword', component: ChangePaswwordComponent },
      { path: 'DisplayDepartments', component: DisplayDepartmentsComponent },
      { path: 'editDepartment/:id', component: EditDepartmentComponent },
      { path: 'ProjectTypes', component: ProjectTypeComponent },
      { path: 'addProjectType', component: AddProjectTypeComponent },
      { path: 'editProjectType/:id', component: EditProjectTypeComponent },
      { path: 'Requests', component: CreateRequesteComponent },
      { path: 'allTeamLeaderReqts', component: AllTeamLeaderRequestsComponent },
      { path: 'createProject', component: CreateProjectComponent },
      { path: 'updateproject/:id', component: UpdateProjectComponent },
      { path: 'AllUsers', component: AllUsersComponent },
      { path: 'DisplayAllClients', component: DisplayAllClientsComponent },
      { path: 'AllManagersReq', component: AllManagerRequestsComponent },
      { path: 'AllClientsReq', component: ClientCreateRequestComponent },
      { path: 'assignReq/:reqId', component: AssignRequestsComponent },
      { path: 'employee', component: DisplayAllEmployeesComponent },
      { path: 'addemployee', component: AddEmployeeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'projectManagerDashboard', component: ProjectmanagerDashboardComponent },
      { path: 'teamLeaderDashboard', component: TeamleaderDashboardComponent },
      { path: 'allClientReqts', component: AllClientRequestsComponent },
      { path: 'organization', component: AddOrganizationComponent },
      { path: 'organizations', component: ListOrganizationsComponent },
      { path: 'organization', component: AddOrganizationComponent },
      { path: 'editOrganization/:id', component: EditOrganizationComponent },
      { path: 'editEmployee/:empId', component: EditEmployeeComponent },
      { path: 'allEmpAssignedRequests', component: EmployeeAssignedRequestsComponent },
      { path: 'allEmpAssigned/:reqId/:problemId', component: EmployeeAssignedRequestsComponent },
      { path: 'DisplayCategories', component: DisplayCategoriesComponent },
      { path: 'projectsForProjectManager', component: AllProjectmanagerProjectsComponent },
      { path: 'allclientsforprojectmanager', component: AllClientsForProjectmanagerComponent },
      { path: 'projectmanagerRequests', component: ProjectmangerRequestsComponent },
      { path: 'assignemployeerequest/:id', component: AssignemployeeRequestComponent },
      { path: 'DisplayAssets', component: DisplayAssetsComponent },
      { path: 'AddAsset', component: AddAssetsComponent },
      { path: 'UpdateAsset/:id', component: UpdateAssetsComponent },





    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
