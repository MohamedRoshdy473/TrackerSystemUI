import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { requestDescription } from "../Models/requestDescription";

@Injectable({
  providedIn: 'root'
})
export class RequestDescriptionService {

  constructor(private httpClient: HttpClient) { }
  httpHeader = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Accept': '*/*'
    })
  };
  // AddRequestDescription(reqDescription): Observable<requestDescription> {
  //   return this.httpClient.post<requestDescription>(`${environment.}`,project, this.httpHeader);
  // }
}
