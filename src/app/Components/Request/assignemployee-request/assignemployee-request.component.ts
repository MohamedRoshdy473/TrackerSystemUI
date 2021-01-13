import { Component, OnInit } from '@angular/core';
import { Problem } from 'src/Shared/Models/problem';
import { ActivatedRoute, Router } from '@angular/router';

import { requestDescription } from 'src/Shared/Models/requestDescription';
import { RequestProblems } from 'src/Shared/Models/requestProblems';
import { ProblemServiceService } from 'src/Shared/Services/problem-service.service';
import { RequestDescriptionService } from 'src/Shared/Services/request-description.service';
import { RequestService } from 'src/Shared/Services/request.service';
import { request } from 'src/Shared/Models/request';

@Component({
  selector: 'app-assignemployee-request',
  templateUrl: './assignemployee-request.component.html',
  styleUrls: ['./assignemployee-request.component.css']
})
export class AssignemployeeRequestComponent implements OnInit {
  lstProblems: Problem[]
  requestProblemObj: RequestProblems
  reqDescriptionObj: requestDescription
  reqId: number
  LoginedUserId: string;
  problemId: number
  requestObj:request
  constructor(
    private activeRoute: ActivatedRoute,
    private problemservice: ProblemServiceService,
    private requestdescriptionservice: RequestDescriptionService,
    private requestservice:RequestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reqId = Number(this.activeRoute.snapshot.params['id']);
    console.log("reqId", this.reqId)
    this.LoginedUserId = localStorage.getItem("loginedUserId")
    // console.log(this.LoginedUserId)
    this.lstProblems = []
    this.requestProblemObj = {
      id: 0, requestId: 0, problemId: 0, problemName: '', requestName: ''
    }
    this.reqDescriptionObj = {
      description: '', requestId: 0, id: 0, userId: this.LoginedUserId
    }
    this.problemservice.GetAllProblems().subscribe(e => {
      console.log(e)
      this.lstProblems = e
      console.log("lst", this.lstProblems)
    })


  }
  getProblemId(id) {
    console.log("problemId", id)
    this.problemId = id
  }
  AssignedEmployeeRequest() {
    this.reqDescriptionObj.requestId = this.reqId;
    this.requestdescriptionservice.AddRequestDescription(this.reqDescriptionObj).subscribe(e => {
      this.requestProblemObj.requestId = this.reqId;
      this.requestProblemObj.problemId = Number(this.problemId)
    //  console.log(this.requestProblemObj)
      this.problemservice.AddRequestProblem(this.requestProblemObj).subscribe(e => {
        this.requestservice.GetRequestByRequestId(this.reqId).subscribe(e=>{
          this.requestObj=e
          console.log("requestObj",this.requestObj)
          this.requestObj.IsAssigned=false;
          this.requestservice.updateRequest(this.reqId,this.requestObj).subscribe(e=>{
            console.log(e)
    this.router.navigate(['home/allEmpAssignedRequests']);

          })
        })
      })
    })


  }
}
