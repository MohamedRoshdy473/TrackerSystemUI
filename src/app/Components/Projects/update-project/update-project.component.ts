import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { project } from '../../../../Shared/Models/project'
import { ProjectService } from '../../../../Shared/Services/project.service'
import { StackholdersService } from '../../../../Shared/Services/stackholders.service'
import { MilestoneService } from '../../../../Shared/Services/milestone.service'
import { ProjectTeamService } from '../../../../Shared/Services/project-team.service'
import { ProjectDocumentService } from '../../../../Shared/Services/project-document.service'
import { stackholder } from '../../../../Shared/Models/stackeholder'
import { mileStone } from '../../../../Shared/Models/mileStone'
import { projectTeam } from '../../../../Shared/Models/projectTeam'
import { ProjectDocuments } from '../../../../Shared/Models/ProjectDocuments'
import {ActivatedRoute, Router} from '@angular/router';
import { projectPosition } from 'src/Shared/Models/projectPosition';
import { ProjectPositionService } from 'src/Shared/Services/project-position.service';
import { department } from "../../../../Shared/Models/department";
import { DepartmentService } from "../../../../Shared/Services/department.service";
import { EmployeeService } from 'src/Shared/Services/employee.service';
import { employee } from 'src/Shared/Models/employee';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
  departments: department[]
  department: department
  lstEmployees:employee[]
  projects: project[]
  project1: project = new project()
  project2: project
  stackholders: stackholder[]
  mileStones: mileStone[]
  teams: projectTeam[]
  stackholderInLst: stackholder
  lstOfStackholder: stackholder[]
  documents: ProjectDocuments[]
  displayModal: boolean;
  displayModal2: boolean;
  displayMaximizable: boolean;
  displayEdit: boolean;
  id: any;
  Id:number
  projectObj:any
  milestonInLst: mileStone
  lstOfMilestones: mileStone[]
  lstoddocproj:ProjectDocuments[]
  lstOfProjectTeams: projectTeam[]
  ProjectTeam: projectTeam
    displayBasic: boolean;
    displayMile:boolean;
    displayteam:boolean;
    displaydoc:boolean
  lstOfprojectPosition: projectPosition[]
  docproject:ProjectDocuments
  teamname:any

  constructor( private positionService: ProjectPositionService,private employeeService: EmployeeService, private departmentService: DepartmentService,private route: ActivatedRoute,  private milestoneservice: MilestoneService, private projectService: ProjectService, 
    private stackholderService: StackholdersService,
    private httpClient : HttpClient,
    private projectteamservice:ProjectTeamService,
    private projectPositionService: ProjectPositionService,
    private projectdocumentsservice:ProjectDocumentService) { }

  ngOnInit(): void {
   // this.id=this.Id;
   this.lstOfStackholder = []
   this.lstOfMilestones = []
   this.lstoddocproj=[]
   this.lstOfProjectTeams = []
   this.docproject={
    Description:'',documentName:'',DocumentFile:'',id:0,projectId:0
  }
   this.department = {
    id: 0, name: ''
  }
   this.stackholderInLst = {
    description: '', id: 0, mobile: '', projectId: 0, rank: '', stackeholderName: ''
  }
  this.milestonInLst = {
    description: '', id: 0, endDate: new Date(), projectId: 0, startDate: new Date(), title: ''
  }
  this.ProjectTeam = {TeamId:0,
    departmentId: 0, id: 0, projectName: '', departmentName: '',
    employeeId: 0, employeeName: '',
    projectId: this.id, projectPositionId: 0, projectPositionName: ''
  }
  this.lstOfprojectPosition = []
  this.docproject={
    Description:'',documentName:'',DocumentFile:'',id:0,projectId:0
  }
  this.projectPositionService.GetAllProjectPosition().subscribe(e => {
    this.lstOfprojectPosition = e
    console.log("lstof position", this.lstOfprojectPosition)
  })
    this.id = this.route.snapshot.params['id'];
    this.stackholderInLst.projectId =  Number(this.id)
this.milestonInLst.projectId=Number(this.id)
this.ProjectTeam.projectId =Number(this.id)
this.docproject.projectId=Number(this.id)
//this.ProjectTeam.projectId=Number(this.id)
this.employeeService.GetAllEmployees().subscribe(
  res => {
    this.lstEmployees = res
    console.log("lstEmp", this.lstEmployees)
  },
  err => console.log(err)
)
    this.projectObj = {
      actualEndDate: new Date(), listOfdocuments: [], listofprojectteam: [], id: 0, organizationId: 0, projectPeriod: 0, clientMobile: '', clientName: '', organizationName: '', projectTypeName: '',
      planndedEndDate: new Date(), planndedStartDate: new Date(), projectCode: '', listOfStackholders: [], listOfmilestones: [], projectTypeId: 0,
      projectName: '', actualStartDate: new Date(), clientId: 0, cost: 0, description: '', employeeId: 0
    }
    this.projectService.getProjectById(this.id).subscribe(res => {
      this.projectObj = res;
      console.log(this.projectObj)
    })

    this.stackholderService.GetAllStackholdersByProjectID(this.id).subscribe(e => {
      this.stackholders = e
      this.projectObj.listOfStackholders=e
      
   
      
    })
    //milestone
    this.milestoneservice.GetAllMileStonesByProjectID(this.id).subscribe(m => {
      this.mileStones = m;
    
      this.projectObj.listOfmilestones=m

      //console.log("milestones",this.mileStones)
    }), err => console.log(err)

    this.projectteamservice.GetAllTeamsByProjectID(this.id).subscribe(t => {
      this.teams = t;
      this.project1.listofprojectteam = this.teams;
      this.projectObj.listofprojectteam=t
      console.log(  this.projectObj.listofprojectteam)
    }), err => console.log(err)

    this.projectdocumentsservice.GetAllDocumentsByProjectID(this.id).subscribe(d => {
      this.documents = d;
      this.project1.listOfdocuments = this.documents;
      this.projectObj.listOfdocuments=d;
    }), err => console.log(err)

  }
  Savetolist_Stackholders() {
    this.lstOfStackholder.push(this.stackholderInLst);
    console.log(  this.stackholderInLst)

    this.stackholderInLst = {
      description: '', id: 0, mobile: '', projectId: this.id, rank: '', stackeholderName: ''
    }
  }


  SaveToDB_Stackholders() {
    this.stackholderService.insertListOfStackholders(this.lstOfStackholder).subscribe(e => {
    this.ngOnInit()
    })
   
  }
  Savetolist_Milestones() {
   // this.milestonInLst.projectId = this.id;
    
    this.lstOfMilestones.push(this.milestonInLst);
    this.milestonInLst = {
      description: '', id: 0, endDate: new Date(), projectId: this.id, startDate: new Date(), title: ''
    }
  }
  SaveToDB_Milestones() {
    this.milestoneservice.insertListOfMilestoness(this.lstOfMilestones).subscribe(e => {
      this.ngOnInit()
    })
  }
  edit(Projectid: number) {
    console.log(Projectid)
    this.projects.forEach(element => {
      if (element.id == Projectid) {
        this.project1 = element
        console.log("id in edit", this.project1.id)
      }
    })
   

    console.log("name", this.projectObj.projectName)
    
    
    this.projectService.updateProject(this.project1.id, this.projectObj).subscribe(res => {

      console.log("update project", res)
    alert('Updated Successfully.');
      
    }), err => console.log(err)
    this.stackholderService.updatestakeholdersbyprojectid(this.projectObj.listOfStackholders).subscribe(res=>{
      console.log(res)
    })

  }
  delStakeHolders(id:number){
    this.stackholderService.deletestakeholder(id).subscribe(res=>{
console.log(res)
this.ngOnInit()
    })
    console.log("id",id)
  }
  delMile(id:number){
    this.milestoneservice.deletemilestone(id).subscribe(res=>{
this.ngOnInit()
    })
  }
  delteam(id:number){
 
this.projectteamservice.deleteteam(id).subscribe(res=>{
this.ngOnInit()
})
  }
  delDocument(id:number){
    console.log(id)
    this.projectdocumentsservice.deletedocument(id).subscribe(res=>{
this.ngOnInit()
    })
  }

  showMaximizableDialog(){
    this.displayMaximizable = true;

  }
  showModalDialog() {
    this.displayModal = true;
}

showBasicDialog() {
    this.displayBasic = true;
}
showmileDialog(){
  this.displayMile=true;
}
showteamDialog(){
  this.displayteam=true
}
showdocDialog(){
  this.displaydoc=true
}
Savetolist_Teams() {
  
  this.ProjectTeam.departmentId = Number(this.ProjectTeam.departmentId)
  this.ProjectTeam.employeeId = Number(this.ProjectTeam.employeeId)
  this.ProjectTeam.projectPositionId = Number(this.ProjectTeam.projectPositionId)
  this.ProjectTeam.departmentName = this.department.name

  this.employeeService.getEmpByID(this.ProjectTeam.employeeId).subscribe(e => {
    this.ProjectTeam.employeeName = e.employeeName
    this.positionService.getPositionByID(this.ProjectTeam.projectPositionId).subscribe(e => {
      this.ProjectTeam.projectPositionName = e.positionName
      console.log("pos anme", this.ProjectTeam.projectPositionName)
      //this.teamname=this.ProjectTeam.teamName;
      console.log("team name",this.teamname)
      console.log(this.ProjectTeam.employeeName)
      this.lstOfProjectTeams.push(this.ProjectTeam);
      this.ProjectTeam = {
        TeamId:0,
        departmentId: 0, id: 0, departmentName: '', employeeName: '', projectPositionId: 0, projectPositionName: '', employeeId: 0
        , projectId: this.id, projectName: ''
      }
    })
  })

  // console.log("projteam before show", this.ProjectTeam)

  // console.log("lst of teams", this.lstOfProjectTeams)
}
SaveToDB_ProjectTeams(){
  this.ProjectTeam.departmentId = Number(this.ProjectTeam.departmentId)
  this.ProjectTeam.employeeId = Number(this.ProjectTeam.employeeId)
  this.ProjectTeam.projectPositionId = Number(this.ProjectTeam.projectPositionId)
  console.log("lst of teams before", this.lstOfProjectTeams)
  this.projectteamservice.insertListOfteams(this.lstOfProjectTeams).subscribe(e=>{
    this.ngOnInit()
    console.log("lst of teams after", this.lstOfProjectTeams)
  }),err=>console.log(err)
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
Savedoctolist(){
  this.lstoddocproj.push(this.docproject);
  this.docproject={
    Description:'',documentName:'',id:0,DocumentFile:'',projectId:this.id
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
  this.docproject.DocumentFile=fileToUpload.name;
  console.log(fileToUpload.name)

  this.httpClient.post(environment.uploadFile, formData)
    .subscribe(res => {
   console.log(res)
   alert('Uploaded Successfully.');


    
    });
}
SaveDocuentToDB() {

  this.projectdocumentsservice.postProjectDocumentByProjectID(this.lstoddocproj).subscribe(e => {
    this.ngOnInit()
    console.log(e)
  })
}
}
