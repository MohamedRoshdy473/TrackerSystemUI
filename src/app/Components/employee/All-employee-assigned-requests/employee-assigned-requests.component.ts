import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { request } from 'src/Shared/Models/request';
import { RequestImage } from 'src/Shared/Models/RequestImages';
import { RequestProblems } from 'src/Shared/Models/requestProblems';
import { EmployeeService } from 'src/Shared/Services/employee.service';
import { ProblemServiceService } from 'src/Shared/Services/problem-service.service';
import { RequestService } from 'src/Shared/Services/request.service';


@Component({
  selector: 'app-employee-assigned-requests',
  templateUrl: './employee-assigned-requests.component.html',
  styleUrls: ['./employee-assigned-requests.component.css']
})
export class EmployeeAssignedRequestsComponent implements OnInit {

  lstAssignedReq: request[]
  EmpId: number
  loading: boolean = true;
  reqImages: RequestImage[]
  NewclientDialogbool: boolean = false
  reqId: number;
  problemId: number;
  RequestProblemObj:RequestProblems

  constructor(
    private empService: EmployeeService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private requestService: RequestService,
    private messageService: MessageService,
    private ProblemServiceService:ProblemServiceService
    ) { }

  ngOnInit(): void {
    this.lstAssignedReq = []
    // this.reqId = this.activeRoute.snapshot.params['reqId'];
    // this.problemId = this.activeRoute.snapshot.params['problemId'];
    // console.log(this.reqId, this.problemId)
    // this.requestService.GetProblemByEmployeeIdAndRequestId(this.reqId,this.problemId).subscribe(e=>{
    //   console.log("e",e)
    // })
    this.EmpId = Number(localStorage.getItem('id'))
    this.requestService.GetAllRequestByEmployeeId(this.EmpId).subscribe(e => {
      this.loading = false;
      this.lstAssignedReq = e
      console.log(this.lstAssignedReq)
      this.lstAssignedReq.forEach(element => {
        this.requestService.GetProblemByEmployeeIdAndRequestId(this.EmpId,element.id).subscribe(e=>{
          element.RequestProblemObj=e;
        })
      });
      console.log("lstAss",this.lstAssignedReq)
    })

  }
  onReject() {
    this.messageService.clear('c');
  }
  viewAllImages(reqId: number) {
    this.NewclientDialogbool = true
    this.requestService.GetRequestImageByRequestId(reqId).subscribe(e => {
      this.reqImages = e
    })
  }
  viewSingleDoc(imgObj) {
    var filePath = `${environment.Domain}wwwroot/requestImage/${imgObj.imageName}`;
    window.open(filePath);
  }
  assignRequests(id: number) {
    console.log(id)
    this.router.navigate(['home/assignemployeerequest', id]);
  }

}
