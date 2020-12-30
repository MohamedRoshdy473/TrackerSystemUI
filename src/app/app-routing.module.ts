import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './Components/Signup/signup.component';
import {SideNavComponent} from './Components/side-nav/side-nav.component'
import { HomeComponent } from './Components/home/home.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import {AllProjectsComponent} from '../app/Components/Projects/all-projects/all-projects.component'
import {CreateProjectComponent} from '../app/Components/Projects/create-project/create-project.component'
import {UpdateProjectComponent} from '../app/Components/Projects/update-project/update-project.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component:  SignupComponent},
  { path: 'home', component: HomeComponent ,children:[
    { path: 'tabs', component:  AllProjectsComponent},
    { path: 'tabs/createProject', component:  CreateProjectComponent},
    { path: 'tabs/updateproject/:id', component:  UpdateProjectComponent},

]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
