import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { request } from 'src/Shared/Models/request';
import { RequestImage } from 'src/Shared/Models/RequestImages';
import { RequestService } from 'src/Shared/Services/request.service';

@Component({
  selector: 'app-all-manager-requests',
  templateUrl: './all-manager-requests.component.html',
  styleUrls: ['./all-manager-requests.component.css']
})
export class AllManagerRequestsComponent implements OnInit {
  lstRequests: request[]
  reqImages:RequestImage[]
  NewclientDialogbool:boolean = false

  constructor(private requestService: RequestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.lstRequests = []
    this.reqImages = []
    this.requestService.GetAllRequests().subscribe(e => {
      this.lstRequests = e
      console.log(this.lstRequests)
    })
  }
  assignRequests(reqId: number) {
    console.log(reqId)
    this.router.navigate(['home/assignReq', reqId]);
  }
  ViewImages(reqId:number){
    console.log(reqId)
    this.requestService.GetRequestImageByRequestId(reqId).subscribe(e=>{
      this.reqImages = e
      console.log(this.reqImages)
      this.NewclientDialogbool = true
    })
  }
  viewSingleDoc(imgObj){
    console.log(imgObj)
    var filePath = `${environment.Domain}wwwroot/requestImage/${imgObj.imageName}`;
    window.open(filePath);
  }

}
