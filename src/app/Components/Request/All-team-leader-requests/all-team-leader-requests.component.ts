import { Component, OnInit } from '@angular/core';
import { projectTeam } from 'src/Shared/Models/projectTeam';
import { projectTeamVM } from 'src/Shared/Models/projectTeamVM';
import { ProjectTeamService } from 'src/Shared/Services/project-team.service';
import { RequestService } from 'src/Shared/Services/request.service';

@Component({
  selector: 'app-all-team-leader-requests',
  templateUrl: './all-team-leader-requests.component.html',
  styleUrls: ['./all-team-leader-requests.component.css']
})
export class AllTeamLeaderRequestsComponent implements OnInit {
  role:string
  LoggedInUserId:number
  lstProjectTeams:projectTeam[]
  projectTeamId:number
  lst:string
  lstofIds:projectTeamVM  
  constructor(private projectTeamSrvice:ProjectTeamService,private requestsService:RequestService) { }

  ngOnInit(): void {
    this.lstofIds={ProjectTeamIds:''}
    this.lstProjectTeams=[]
  this.role= localStorage.getItem('roles')
  this.LoggedInUserId = Number(localStorage.getItem('id'))
  console.log("loggedin",localStorage.getItem('id'))
  this.projectTeamSrvice.GetProjectTeamByProjectPositionIdAndEmployeeId(1,this.LoggedInUserId).subscribe(e=>{
    this.lstProjectTeams = e
    this.lstProjectTeams.forEach(element => {
      console.log(element.id.toString())
      this.lstofIds.ProjectTeamIds+=(element.id).toString()+','
    });
    this.lstofIds.ProjectTeamIds=this.lstofIds.ProjectTeamIds.substring(0, this.lstofIds.ProjectTeamIds.length - 1)
    console.log("lst=",this.lstofIds.ProjectTeamIds)

    this.requestsService.GetAllRequestByProjectTeamId(this.lstofIds).subscribe(e=>{
      console.log(e)
    })
  })
  }
 
}
