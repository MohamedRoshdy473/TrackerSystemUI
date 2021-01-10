import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { request } from "../Models/request";
import { RequestImage } from '../Models/RequestImages';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient : HttpClient) { }
  httpHeader={headers: new HttpHeaders({
    'content-type':'application/json',
    'Accept': '*/*'  
  })};
  
GetAllRequests(): Observable <request[]>{
  return this.httpClient.get<request[]> (`${environment.requests}`,this.httpHeader) ;
}
// GetAllStackholdersByProjectID(ProjectID:Number): Observable <stackholder[]>{
//   return this.httpClient.get<stackholder[]> (`${environment.GetAllStackholdersByProjectID}${ProjectID}`,this.httpHeader) ;
// }
inserRequest(req): Observable <request>{
  return this.httpClient.post<request> (`${environment.requests}`,req,this.httpHeader) ;
}

insertListOfrequests(requests:request[]): Observable <any >{
  return this.httpClient.post<any> (`${environment.requests}`,requests,this.httpHeader) ;
}
GetRequestsByClientId(clientID:Number):Observable<any>{
  return this.httpClient.get<request[]>(`${environment.GetAllRequestByClientId}${clientID}`,this.httpHeader);
}

addListRequestImages(images:RequestImage[]): Observable <RequestImage[] >{
  return this.httpClient.post<RequestImage[]> (`${environment.addRequstImages}`,images,this.httpHeader) ;
}
GetRequestImageByRequestId(requestId:Number):Observable<any>{
  return this.httpClient.get<RequestImage[]>(`${environment.GetRequestImageByRequestId}${requestId}`,this.httpHeader);
}

}
