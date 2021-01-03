import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import{organization} from 'src/Shared/Models/organization'

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  constructor(private httpClient : HttpClient) { }
  httpHeader={headers: new HttpHeaders({
    'content-type':'application/json',
    'Accept': '*/*'  
  })};
  GetAllOrganizations(): Observable <organization[]>{
    return this.httpClient.get<organization[]> (`${environment.organizations}`,this.httpHeader) ;
  }

  AddOrganization(orgObj): Observable<organization> {
    return this.httpClient.post<organization>(`${environment.organizations}`,orgObj, this.httpHeader);
  }
}
