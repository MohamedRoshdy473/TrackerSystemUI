import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { mileStone } from '../Models/mileStone';

@Injectable({
  providedIn: 'root'
})
export class MilestoneService {

  constructor(private httpClient : HttpClient) { }
  httpHeader={headers: new HttpHeaders({
    'content-type':'application/json',
    'Accept': '*/*'  
  })};
  insertListOfMilestoness(milestones:mileStone[]): Observable <mileStone[] >{

    return this.httpClient.post<mileStone[]> (`${environment.postListOfMilestoness}`,milestones,this.httpHeader) ;
  }
}
