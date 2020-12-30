import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json',
    "Authorization": "bearer " + localStorage.getItem('token')
      })};
  user: User;
  constructor(private httpclient: HttpClient,private router : Router) { }
  logout()
  {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  IsAdmin()
  {
    return localStorage.getItem('roles') == 'Admin';
  }
  IsUser()
  {
    return localStorage.getItem('roles') == 'User';
  }
  changPassword(NewPassword:string)
  {
    var data={
      userName:localStorage.getItem('userName'),
      password:"P@ssw0rd",
      Newpassword:NewPassword
    };
    console.log(data);
    return this.httpclient.post(`${environment.User}/Authenticate/changPassword`, data, this.httpOptions)
  }
}
