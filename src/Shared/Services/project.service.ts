import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { project } from '../Models/project'
import { CreateTeamVM, Team } from '../Models/team';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) { }
  httpHeader = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Accept': '*/*'
    })
  };

  GetAllProjects(): Observable<project[]> {
    return this.httpClient.get<project[]>(`${environment.project}`, this.httpHeader);
  }
  AddProject(project): Observable<project> {
    return this.httpClient.post<project>(`${environment.project}`,project, this.httpHeader);
  }
  DeleteProject(id:number,project:project):Observable<project> {
    return this.httpClient.put<project>(`${environment.DeleteProject}${id}`, project,this.httpHeader);
  }
  updateProject(id:number,project:project):Observable<project>{
    return this.httpClient.put<project>(`${environment.updateProject}${id}`,project,this.httpHeader);
  }
  getProjectById(id:number):Observable<any>{
    return this.httpClient.get<any>(`${environment.GetProjectById}${id}`,this.httpHeader);
  }
  GetProjectsByClientId(clientID:Number):Observable<any>{
    return this.httpClient.get<any[]>(`${environment.GetProjectsByClientId}${clientID}`,this.httpHeader);
  }
  // addTeam(team):Observable<Team>{
  //   return this.httpClient.post<Team>(`${environment.addteams}`,team,this.httpHeader);
  // }

  addTeam(team):Observable<CreateTeamVM>{
    return this.httpClient.post<CreateTeamVM>(`${environment.addteams}`,team,this.httpHeader);
  }



  getTeamByTeamId(id:number):Observable<any>{
    return this.httpClient.get<any>(`${environment.getTeambyId}${id}`,this.httpHeader);
  }
  GetAllProjectsByEmployeeId(id:number):Observable<any>{
    return this.httpClient.get<any>(`${environment.GetAllProjectsByEmployeeId}${id}`,this.httpHeader);
  }
}