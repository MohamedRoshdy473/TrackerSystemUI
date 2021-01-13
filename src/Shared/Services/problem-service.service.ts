import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Problem } from '../Models/problem';
import { RequestProblems } from '../Models/requestProblems';

@Injectable({
  providedIn: 'root'
})
export class ProblemServiceService {

  constructor(private httpClient : HttpClient) { }
  httpHeader={headers: new HttpHeaders({
    'content-type':'application/json',
    'Accept': '*/*'  
  })};
  GetAllProblems(): Observable <Problem[]>{
    return this.httpClient.get<Problem[]> (`${environment.Problems}`,this.httpHeader) ;
  }
  GetAllRequestProblems(): Observable <RequestProblems[]>{
    return this.httpClient.get<RequestProblems[]> (`${environment.RequestProblems}`,this.httpHeader) ;
  }
  GetAllRequestByRequestProblemId(problemId:number): Observable <RequestProblems[]>{
    return this.httpClient.get<RequestProblems[]> (`${environment.RequestProblems}GetAllRequestByProblemId/${problemId}`,this.httpHeader) ;
  }
  AddRequestProblem(requestProblem:RequestProblems):Observable<RequestProblems>{
return this.httpClient.post<RequestProblems>(`${environment.RequestProblems}`,requestProblem,this.httpHeader)
  }
}
