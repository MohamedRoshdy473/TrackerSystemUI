import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
   email :string
   password :string
  
   httpHeader={headers: new HttpHeaders({
    'content-type':'application/json',
    'Accept': ' */* ',
    // 'Access-Control-Allow-Origin': '*',
    // "Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, DELETE",
    // "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, X-Requested-With"   
  })};
  constructor(private httpClient:HttpClient) { }

  login(email:string,password:string){
    this.email=email;
    this.password=password;
    let Data={email,password}
    console.log(Data)
  return this.httpClient.post(`${environment.Domain}api/Authenticate/login`,Data,this.httpHeader)
  }

  public isLoggedIn()
  {
    return !! localStorage.getItem("token");
  }
}
