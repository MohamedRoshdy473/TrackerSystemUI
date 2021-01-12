import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { HttpClient, HttpEventType } from '@angular/common/http';

import { employee } from 'src/Shared/Models/employee';
import { client } from 'src/Shared/Models/client';
import { organization } from 'src/Shared/Models/organization';
import { projectType } from 'src/Shared/Models/projectType';
import { OrganizationService } from 'src/Shared/Services/organization.service';
import { ClientService } from 'src/Shared/Services/client.service';
import { EmployeeService } from 'src/Shared/Services/employee.service';
import { MessageService } from 'primeng/api';
import { ProjectService } from 'src/Shared/Services/project.service';
import { Router } from '@angular/router';
import { ProjectTypeService } from 'src/Shared/Services/project-type.service';
import { StackholdersService } from 'src/Shared/Services/stackholders.service';
import { stackholder } from 'src/Shared/Models/stackeholder';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ProjectDocumentService } from 'src/Shared/Services/project-document.service';

import { mileStone } from 'src/Shared/Models/mileStone';
import { MilestoneService } from "../../../../Shared/Services/milestone.service";
import { projectPosition } from "../../../../Shared/Models/projectPosition";
import { ProjectPositionService } from "../../../../Shared/Services/project-position.service";
import { projectTeam } from "../../../../Shared/Models/projectTeam";
import { CreateTeamVM, Team } from "../../../../Shared/Models/team";
import { ProjectTeamService } from "../../../../Shared/Services/project-team.service";
import { DepartmentService } from "../../../../Shared/Services/department.service";
import { department } from "../../../../Shared/Models/department";
import { ProjectDocuments } from 'src/Shared/Models/ProjectDocuments';
import { environment } from 'src/environments/environment';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  projectObj: any;
  lstClients: client[];
  lstOrganizations: organization[];
  OrganizationObj: organization;
  stackholderInLst: stackholder
  lstOfStackholder: stackholder[]
  lstOfProjectTeams: projectTeam[]

  ProjectTeam: projectTeam
  team:Team
  departments: department[]
  department: department
  lstOfprojectPosition: projectPosition[]
  projectPosition: projectPosition
  milestonInLst: mileStone
  lstOfMilestones: mileStone[]

  lstEmployees: employee[];
  employeeObj: employee;
  lstProjectTypes: projectType[];
  ProjectTypeObj: projectType;
  projectID: any
  docproject:ProjectDocuments
  lstoddocproj:ProjectDocuments[]

  constructor(
    private httpClient : HttpClient,
    private projectdocumentService: ProjectDocumentService,
    private projectService: ProjectService, private organizationService: OrganizationService,
    private clientService: ClientService, private projectTeamService: ProjectTeamService,
    private departmentService: DepartmentService, private positionService: ProjectPositionService,
    private projectPositionService: ProjectPositionService, private milestoneService: MilestoneService,
    private stackholderService: StackholdersService, private employeeService: EmployeeService,
    private projectTypeService: ProjectTypeService, private messageService: MessageService,
    private router: Router) { }

  ngOnInit(): void {
    this.lstOfStackholder = []
    this.lstOfMilestones = []
    this.lstoddocproj=[]
    this.lstOfProjectTeams = []

    this.lstOfprojectPosition = []
    this.docproject={
      Description:'',documentName:'',documentFile:'',id:0,projectId:0
    }
    this.projectObj = {
      id: 0, projectName: "", projectCode: "", projectTypeName: "", projectTypeId: 0, cost: 0, projectPeriod: 0, planndedStartDate: new Date()
      , actualStartDate: new Date(), planndedEndDate: new Date(), actualEndDate: new Date(), description: "", organizationId: 0, employeeId: 0, clientId: 0
    }
    this.stackholderInLst = {
      description: '', id: 0, mobile: '', projectId: 0, rank: '', stackeholderName: ''
    }
    this.milestonInLst = {
      description: '', id: 0, endDate: new Date(), projectId: 0, startDate: new Date(), title: ''
    }
    this.projectPosition =
    {
      positionName: '', id: 0
    }
    this.department = {
      id: 0, name: ''
    }
    this.ProjectTeam = {teamName:'',
      teamId:0,
      departmentId: 0,id: 0, projectName: '', departmentName: '',
      employeeId: 0, employeeName: '',
      projectId: this.projectID, projectPositionId: 0, projectPositionName: ''
    }
    this.team={
      Id:0,Name:''
    }
    this.organizationService.GetAllOrganizations().subscribe(
      res => { this.lstOrganizations = res },
      err => console.log(err)
    )
    this.clientService.GetAllClients().subscribe(
      res => { this.lstClients = res },
      err => console.log(err)
    )
    this.employeeService.GetAllEmployees().subscribe(
      res => {
        this.lstEmployees = res
        console.log("lstEmp", this.lstEmployees)
      },
      err => console.log(err)
    )
    this.projectTypeService.GetAllProjectTypes().subscribe(
      data => { this.lstProjectTypes = data },
      err => console.log(err)
    )
    this.projectTeamService.GetAllProjectTeams().subscribe(e => {
     // this.lstOfProjectTeams = e
      console.log("lstof teams", this.lstOfProjectTeams)
    })
    this.projectPositionService.GetAllProjectPosition().subscribe(e => {
      this.lstOfprojectPosition = e
      console.log("lstof position", this.lstOfprojectPosition)
    })

  }
  AddProject() {
    this.projectService.AddProject(this.projectObj).subscribe(
      (res) => {
        this.projectID = res
        this.stackholderInLst.projectId = this.projectID
        this.docproject.projectId=this.projectID

        console.log(this.projectID)
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Record Added' });
      },
      err => console.log(err),
    );
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Record Added' });
  }
  showInfo() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' });
  }
  showWarn() {
    this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' });
  }
  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
  }
  showCustom() {
    this.messageService.add({ severity: 'custom', summary: 'Custom', detail: 'Message Content', icon: 'pi-file' });
  }
  showTopLeft() {
    this.messageService.add({ key: 'tl', severity: 'info', summary: 'Info', detail: 'Message Content' });
  }
  showTopCenter() {
    this.messageService.add({ key: 'tc', severity: 'warn', summary: 'Warn', detail: 'Message Content' });
  }
  showBottomCenter() {
    this.messageService.add({ key: 'bc', severity: 'success', summary: 'Success', detail: 'Message Content' });
  }
  showConfirm() {
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' });
  }
  onConfirm() {
    this.messageService.clear('c');
  }
  onReject() {
    this.messageService.clear('c');
  }
  Savetolist_Stackholders() {
    this.lstOfStackholder.push(this.stackholderInLst);
    this.stackholderInLst = {
      description: '', id: 0, mobile: '', projectId: this.projectID, rank: '', stackeholderName: ''
    }
  }

  SaveToDB_Stackholders() {
    this.stackholderService.insertListOfStackholders(this.lstOfStackholder).subscribe(e => {
    })
  }

  SaveToDB_Milestones() {
    this.milestoneService.insertListOfMilestoness(this.lstOfMilestones).subscribe(e => {
    })
  }
  Savetolist_Milestones() {
    this.milestonInLst.projectId = this.projectID;
    console.log("this.projectID", this.projectID)
    this.lstOfMilestones.push(this.milestonInLst);
    this.milestonInLst = {
      description: '', id: 0, endDate: new Date(), projectId: this.projectID, startDate: new Date(), title: ''
    }
  }

  OnChangeEmpID(i: any) {
    console.log(i)
    console.log(this.ProjectTeam.employeeId)
    this.departmentService.getDepartmentByEmpID(this.ProjectTeam.employeeId).subscribe(e => {
      this.department = e
      console.log(this.department)
    }
      , error => {
        console.log(error);
      });
  }
  teamname:any
saveTeam(){
  
}
tasneem:number;
SaveToDB_ProjectTeams(){
  var addTeamObj = new CreateTeamVM();
  addTeamObj.name = this.team.Name;
addTeamObj.projectTeams =  this.lstOfProjectTeams;

  this.projectService.addTeam(addTeamObj).subscribe(e=>{
    this.Idteam=e;
    this.tasneem=this.Idteam;

    })
 
 
}
  Savetolist_Teams() {
   
    this.ProjectTeam.projectId = this.projectID
    this.ProjectTeam.departmentId = Number(this.ProjectTeam.departmentId)
    this.ProjectTeam.employeeId = Number(this.ProjectTeam.employeeId)
    this.ProjectTeam.projectPositionId = Number(this.ProjectTeam.projectPositionId)
    //this.ProjectTeam.TeamId=Number(localStorage.getItem(this.Idteam));
    this.ProjectTeam.departmentName = this.department.name

    this.employeeService.getEmpByID(this.ProjectTeam.employeeId).subscribe(e => {


      this.ProjectTeam.employeeName = e.employeeName
      this.positionService.getPositionByID(this.ProjectTeam.projectPositionId).subscribe(e => {
        this.ProjectTeam.projectPositionName = e.positionName
       this.teamname=this.team.Name;
      // this.ProjectTeam.TeamId=Number(this.team.Id);
      this.ProjectTeam.teamId=29;
        this.lstOfProjectTeams.push(this.ProjectTeam);
        this.ProjectTeam = {teamName:'',
          teamId:0,
          departmentId: 0, id: 0, departmentName: '', employeeName: '', projectPositionId: 0, projectPositionName: '', employeeId: 0
          , projectId: this.projectID, projectName: ''
        }

        
      })
    })

    // console.log("projteam before show", this.ProjectTeam)
    // console.log("lst of teams", this.lstOfProjectTeams)
  }

  Idteam:any
  teamObj:any;

  clickkk(){
    console.log("clickkkkkkkk")
  }
  Savedoctolist(){
    this.lstoddocproj.push(this.docproject);
    this.docproject={
      Description:'',documentName:'',id:0,documentFile:'',projectId:this.projectID
    };
    console.log(this.lstoddocproj);
      }
      public message: string;
  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.docproject.documentFile=fileToUpload.name;
    console.log(fileToUpload.name)
 
    this.httpClient.post(environment.uploadFile, formData)
      .subscribe(res => {
     console.log(res)
     alert('Uploaded Successfully.');

  
      
      });
  } 
  SaveDocuentToDB() {

    this.projectdocumentService.postProjectDocumentByProjectID(this.lstoddocproj).subscribe(e => {
      console.log(e)
    })
  }
}
