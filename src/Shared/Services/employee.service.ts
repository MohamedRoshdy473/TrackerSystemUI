import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { client } from '../Models/client';
import { employee } from '../Models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient : HttpClient) { }
  httpHeader={headers: new HttpHeaders({
    'content-type':'application/json',
    'Accept': '*/*'  
  })};
  GetAllEmployees(): Observable <employee[]>{
    return this.httpClient.get<employee[]> (`${environment.employees}`,this.httpHeader) ;
  }
    
getEmpByID(id: number): Observable <employee  >{
  return this.httpClient.get<employee> (`${environment.employees}${id}`,this.httpHeader) ;
}
}
