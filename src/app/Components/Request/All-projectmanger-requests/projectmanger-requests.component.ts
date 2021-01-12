import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { project } from 'src/Shared/Models/project';
import { projectsVM } from 'src/Shared/Models/projectsVM';
import { projectTeamVM } from 'src/Shared/Models/projectTeamVM';
import { request } from 'src/Shared/Models/request';
import { RequestImage } from 'src/Shared/Models/RequestImages';
import { ProjectTeamService } from 'src/Shared/Services/project-team.service';
import { ProjectService } from 'src/Shared/Services/project.service';
import { RequestService } from 'src/Shared/Services/request.service';

@Component({
  selector: 'app-projectmanger-requests',
  templateUrl: './projectmanger-requests.component.html',
  styleUrls: ['./projectmanger-requests.component.css']
})
export class ProjectmangerRequestsComponent implements OnInit {

  lstRequests: request[]
  projects: project[]

  reqImages: RequestImage[]
  NewclientDialogbool: boolean = false
  role: string
  LoggedInUserId: number
  lstprojId: projectsVM
  lstProjectTeamIds: projectTeamVM

  constructor(private requestService: RequestService,
    private projectService: ProjectService,
    private projectTeamservice: ProjectTeamService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.lstprojId = { ProjectIds: '' }
    this.lstProjectTeamIds = { ProjectTeamIds: '' }
    this.role = localStorage.getItem('roles')
    this.LoggedInUserId = Number(localStorage.getItem('id'))
    console.log("loggedin", localStorage.getItem('id'))
    this.projectService.GetAllProjectsByEmployeeId(this.LoggedInUserId).subscribe(projects => {
      projects.forEach(element => {
        this.lstprojId.ProjectIds += (element.id).toString() + ','
        console.log(this.lstprojId)
      });
      this.lstprojId.ProjectIds = this.lstprojId.ProjectIds.substring(0, this.lstprojId.ProjectIds.length - 1)
      this.projectTeamservice.GetAllProjectTeamsByProjectIds(this.lstprojId).subscribe(e => {
        //  console.log('lstprojectteams',e)
        e.forEach(element => {
          this.lstProjectTeamIds.ProjectTeamIds += (element.id).toString() + ','
        });
        this.lstProjectTeamIds.ProjectTeamIds = this.lstProjectTeamIds.ProjectTeamIds.substring(0, this.lstProjectTeamIds.ProjectTeamIds.length - 1)
          console.log('lstprojectteams',this.lstProjectTeamIds)
          this.requestService.GetAllRequestByProjectTeamId(this.lstProjectTeamIds).subscribe(e=>{
            console.log("requests",e)
            this.lstRequests=e
          })

      })
    })
    this.lstRequests = []
    this.reqImages = []

    this.requestService.GetAllRequests().subscribe(e => {
      this.lstRequests = e
      //console.log(this.lstRequests)
    })
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

}

