import { Component, OnInit } from '@angular/core';
import { assignedRequests } from 'src/Shared/Models/assignedRequest';
import { projectPosition } from 'src/Shared/Models/projectPosition';
import { projectTeam } from 'src/Shared/Models/projectTeam';
import { AssignedRequestsService } from 'src/Shared/Services/assigned-requests.service';
import { ProjectPositionService } from 'src/Shared/Services/project-position.service';
import { ProjectTeamService } from 'src/Shared/Services/project-team.service';

@Component({
  selector: 'app-assign-requests',
  templateUrl: './assign-requests.component.html',
  styleUrls: ['./assign-requests.component.css']
})
export class AssignRequestsComponent implements OnInit {

  assignedReqObj: assignedRequests
  lstProjectPosition: projectPosition[]
  lstProjectTeam:projectTeam[]
  constructor(
    private assignedRequestsService: AssignedRequestsService,
    private projectPositionService: ProjectPositionService,
    private projectTeamService:ProjectTeamService
  ) { }

  ngOnInit(): void {
    this.lstProjectPosition = []
    this.assignedReqObj = {
      RequestId: 0, id: 0, projectPositionId: 0, projectTeamId: 0
    }
    // this.assignedRequestsService.AssignedRequest(this.assignedReqObj).subscribe(e => {
    //   console.log(this.assignedReqObj)
    // })
    this.projectPositionService.GetAllProjectPosition().subscribe(e=>{
      this.lstProjectPosition = e
    })

  }
  getTeamsByPositionId(event){
    console.log("position id",this.assignedReqObj.projectPositionId)
    console.log(event)

    this.projectTeamService.GetProjectTeamsByProjectPositionId(this.assignedReqObj.projectPositionId).subscribe(e=>{
      this.lstProjectTeam = e
      console.log(this.lstProjectTeam)
    })
  }

}
