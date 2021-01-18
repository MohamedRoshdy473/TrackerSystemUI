import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { asset } from "../Models/asset";
@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private httpClient : HttpClient) { }
  httpHeader={headers: new HttpHeaders({
    'content-type':'application/json',
    'Accept': '*/*'  
  })};
  GetAllAssets(): Observable <asset[]>{
    return this.httpClient.get<asset[]> (`${environment.asset}`,this.httpHeader) ;
  }
  inserAsset(client:asset): Observable <any>{
    return this.httpClient.post<any> (`${environment.asset}`,client,this.httpHeader) ;
  }

  deleteAsset(id:asset):Observable<any>{ 
    return this.httpClient.delete<any>(`${environment.asset}${id}`,this.httpHeader);
  }

  updateAsset(id:Number,asset:asset):Observable<asset>{
    return this.httpClient.put<asset>(`${environment.asset}`+ id,asset,this.httpHeader);
  }
  GetAssetById(assetId: number): Observable<any> {
    return this.httpClient.get<asset>(`${environment.asset}${assetId}`, this.httpHeader)
  }
}
