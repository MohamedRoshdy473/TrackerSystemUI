import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { project } from '../Models/project'
import { projectType } from '../Models/projectType';


@Injectable({
  providedIn: 'root'
})
export class ProjectTypeService {

  constructor(private httpClient: HttpClient) { }
  httpHeader = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Accept': '*/*'
    })
  };

  GetAllProjectTypes(): Observable<projectType[]> {
    return this.httpClient.get<projectType[]>(`${environment.projectTypes}`, this.httpHeader);
  }
  // AddProjectType(projectType): Observable<project[]> {
  //   return this.httpClient.post<project[]>(`${environment.project}`,project, this.httpHeader);
  // }
}