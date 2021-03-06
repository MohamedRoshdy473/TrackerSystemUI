import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Problem } from 'src/Shared/Models/problem';
import { request } from 'src/Shared/Models/request';
import { requestDescription } from 'src/Shared/Models/requestDescription';
import { RequestImage } from 'src/Shared/Models/RequestImages';
import { RequestProblems } from 'src/Shared/Models/requestProblems';
import { ProblemServiceService } from 'src/Shared/Services/problem-service.service';
import { RequestDescriptionService } from 'src/Shared/Services/request-description.service';
import { RequestService } from 'src/Shared/Services/request.service';

@Component({
  selector: 'app-all-manager-requests',
  templateUrl: './all-manager-requests.component.html',
  styleUrls: ['./all-manager-requests.component.css']
})
export class AllManagerRequestsComponent implements OnInit {
  lstRequests: any[]
  RequestProblemId: number
  lstAllRequestsByProblem: RequestProblems[]
  reqImages: RequestImage[]
  lstRequestProblems: Problem[]
  NewclientDialogbool: boolean = false
  lstRequestDesc: requestDescription[]
  NewdecDialogbool: boolean;
  reqDescriptionObj: requestDescription
  LoggedInUserString: string
  requestIDForCloseRequest: number
  NewdecDialogForCloseRequest: boolean
  RequestObj: request


  constructor(private requestService: RequestService,
     private requestProblemService: ProblemServiceService,
    private requestDescriptionService: RequestDescriptionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.lstRequestDesc = []
    this.lstAllRequestsByProblem = []
    this.lstRequestProblems = []
    this.lstRequests = []
    this.reqImages = []
    this.reqDescriptionObj = {
      description: '', id: 0, requestId: 0, userId: this.LoggedInUserString
    }
    this.requestService.GetAllRequests().subscribe(e => {
      this.lstRequests = e
      console.log(this.lstRequests)
    })
    this.requestProblemService.GetAllProblems().subscribe(
      res => {
        this.lstRequestProblems = res,
        console.log("lstRequestProblems", res)
      }

    )
  }
  assignRequests(reqId: number) {
    console.log(reqId)
    this.router.navigate(['home/assignReq', reqId]);
  }
  ViewImages(reqId: number) {
    console.log(reqId)
    this.requestService.GetRequestImageByRequestId(reqId).subscribe(e => {
      this.reqImages = e
      console.log(this.reqImages)
      this.NewclientDialogbool = true
    })
  }
  viewSingleDoc(imgObj) {
    console.log(imgObj)
    var filePath = `${environment.Domain}wwwroot/requestImage/${imgObj.imageName}`;
    window.open(filePath);
  }
  GetproblemId(problemId) {
    console.log("problemId", problemId)
    this.requestProblemService.GetAllRequestByRequestProblemId(problemId).subscribe(e => {
      this.lstRequests = e
      console.log(e)
    })
  }
  GetAllRequests() {
    this.ngOnInit()
  }
  ViewMoreDesc(requestID) {
    this.requestDescriptionService.GetAllDescByRequestID(requestID).subscribe(res => {
      console.log("desc", res)
      this.lstRequestDesc = res;
      this.NewdecDialogbool = true;
    })
  }
  Opendialog(requestID: number) {
    this.requestIDForCloseRequest = requestID
    console.log("requestIDForCloseRequest", requestID)
    this.NewdecDialogForCloseRequest = true
  }
  CloseRequest() {
    this.reqDescriptionObj.requestId=this.requestIDForCloseRequest;
    this.requestDescriptionService.AddRequestDescription(this.reqDescriptionObj).subscribe(e => {
      this.requestService.GetRequestByRequestId(this.requestIDForCloseRequest).subscribe(e => {
        this.RequestObj = e
        console.log("this.RequestObj",this.RequestObj)
        this.RequestObj.requestStatusId = 2  //Close
        this.requestService.updateRequest(this.requestIDForCloseRequest, this.RequestObj).subscribe(e => {
          this.ngOnInit();

        })
      })
    })
    this.NewdecDialogForCloseRequest = false
  }
}
