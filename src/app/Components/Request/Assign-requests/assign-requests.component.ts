import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { assignedRequests } from 'src/Shared/Models/assignedRequest';
import { projectPosition } from 'src/Shared/Models/projectPosition';
import { projectTeam } from 'src/Shared/Models/projectTeam';
import { requestDescription } from 'src/Shared/Models/requestDescription';
import { AssignedRequestsService } from 'src/Shared/Services/assigned-requests.service';
import { ProjectPositionService } from 'src/Shared/Services/project-position.service';
import { ProjectTeamService } from 'src/Shared/Services/project-team.service';
import { RequestDescriptionService } from "../../../../Shared/Services/request-description.service";

@Component({
  selector: 'app-assign-requests',
  templateUrl: './assign-requests.component.html',
  styleUrls: ['./assign-requests.component.css']
})
export class AssignRequestsComponent implements OnInit {

  assignedReqObj: assignedRequests
  lstProjectPosition: projectPosition[]
  lstProjectTeamAfterFilter: projectTeam[]
  lstProjectTeam: projectTeam[]
  reqDescriptionObj: requestDescription
  reqId:number 
  userId:string
  constructor(
    private activeRoute: ActivatedRoute,private route:Router,
    private assignedRequestsService: AssignedRequestsService,
    private projectPositionService: ProjectPositionService,
    private projectTeamService: ProjectTeamService,
    private requestDescriptionService:RequestDescriptionService
  ) { }

  ngOnInit(): void {
   this.reqId=Number( this.activeRoute.snapshot.params['reqId']);
   console.log("reqID",this.reqId)
    this.userId = localStorage.getItem('id')
    console.log("userId",localStorage.getItem('id'))
    this.lstProjectPosition = []
    this.reqDescriptionObj = {
      description:'',id:0,requestId:this.reqId,userId:this.userId
    }
    this.assignedReqObj = {employeeId:0,
      requestId: this.reqId, id: 0, projectPositionId: 0, projectTeamId: 0
    }
    this.projectPositionService.GetAllProjectPosition().subscribe(e => {
      this.lstProjectPosition = e
    })

  }
  getTeamsByPositionId(event) {
    this.projectTeamService.GetProjectTeamsByProjectPositionId(this.assignedReqObj.projectPositionId).subscribe(e => {
      this.lstProjectTeam = e
      console.log(this.lstProjectTeam)
      this.lstProjectTeamAfterFilter = e.reduce((unique, o) => {
        if (!unique.some(obj => obj.TeamId === o.TeamId)) {
          unique.push(o);
        }
        return unique;
      }, []);
    })
  }
  saveAssignedRequest(){
    this.assignedReqObj.employeeId = Number(this.assignedReqObj.employeeId)
    this.assignedReqObj.projectPositionId = Number(this.assignedReqObj.projectPositionId)
    this.assignedReqObj.projectTeamId = Number(this.assignedReqObj.projectTeamId)
    this.assignedReqObj.requestId = Number(this.assignedReqObj.requestId)
    this.assignedRequestsService.AssignedRequest(this.assignedReqObj).subscribe(e=>{
      console.log("ass")
       this.requestDescriptionService.AddRequestDescription(this.reqDescriptionObj).subscribe(e=>{
      console.log("desc")

    })
    })
  }

}
