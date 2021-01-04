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
  GetAllTeamsByProjectID(ProjectID:Number): Observable <projectTeam[]>{
    return this.httpClient.get<projectTeam[]> (`${environment.GetAllTeamsByProjectId}${ProjectID}`,this.httpHeader) ;
  }
  updateteambyprojectid(team:projectTeam[]):Observable<projectTeam[]>{
    return this.httpClient.put<projectTeam[]>(`${environment.updateteamsbyprojectid}`,team,this.httpHeader);
  }
  deleteteam(id:number):Observable<any>{ 
    return this.httpClient.delete<any>(`${environment.deleteteam}${id}`,this.httpHeader);
  }
  GetProjectTeamsByProjectPositionId(positionId:number){
    return this.httpClient.get<projectTeam[]> (`${environment.GetProjectTeamsByProjectPositionId}${positionId}`,this.httpHeader) ;
  }
}
