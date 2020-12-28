import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { client } from '../Models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient : HttpClient) { }
  httpHeader={headers: new HttpHeaders({
    'content-type':'application/json',
    'Accept': '*/*'  
  })};
  GetAllClients(): Observable <client[]>{
    return this.httpClient.get<client[]> (`${environment.clients}`,this.httpHeader) ;
  }
}
