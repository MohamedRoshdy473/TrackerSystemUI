import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { projectTeam } from '../Models/projectTeam';

@Injectable({
  providedIn: 'root'
})
export class ProjectTeamService {

  constructor(private httpClient : HttpClient) { }
  httpHeader={headers: new HttpHeaders({
    'content-type':'application/json',
    'Accept': '*/*'  
  })};
  insertListOfteams(projectTeams:projectTeam[]): Observable <any>{
    return this.httpClient.post<any> (`${environment.ProjectTeams}`,projectTeams,this.httpHeader) ;
  }
  GetAllProjectTeams(): Observable<projectTeam[]> {
    return this.httpClient.get<projectTeam[]>(`${environment.ProjectTeams}`, this.httpHeader);
  }
}
