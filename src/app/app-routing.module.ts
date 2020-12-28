import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from '../app/signup/signup.component';
import {SideNavComponent} from '../app/side-nav/side-nav.component'
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import {AllProjectsComponent} from '../app/Components/Projects/all-projects/all-projects.component'
import {CreateProjectComponent} from '../app/Components/Projects/create-project/create-project.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component:  SignupComponent},
  { path: 'home', component: HomeComponent ,children:[
    { path: 'tabs', component:  AllProjectsComponent},
    { path: 'tabs/createProject', component:  CreateProjectComponent},

]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
