import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { project } from '../../../../Shared/Models/project'
import { ProjectService } from '../../../../Shared/Services/project.service'
import { CreateTeamVM, Team } from "../../../../Shared/Models/team";

import { StackholdersService } from '../../../../Shared/Services/stackholders.service'
import { MilestoneService } from '../../../../Shared/Services/milestone.service'
import { ProjectTeamService } from '../../../../Shared/Services/project-team.service'
import { ProjectDocumentService } from '../../../../Shared/Services/project-document.service'
import { stackholder } from '../../../../Shared/Models/stackeholder'
import { mileStone } from '../../../../Shared/Models/mileStone'
import { projectTeam } from '../../../../Shared/Models/projectTeam'
import { ProjectDocuments } from '../../../../Shared/Models/ProjectDocuments'
import { ActivatedRoute, Router } from '@angular/router';
import { projectPosition } from 'src/Shared/Models/projectPosition';
import { ProjectPositionService } from 'src/Shared/Services/project-position.service';
import { department } from "../../../../Shared/Models/department";
import { DepartmentService } from "../../../../Shared/Services/department.service";
import { EmployeeService } from 'src/Shared/Services/employee.service';
import { employee } from 'src/Shared/Models/employee';
import { environment } from 'src/environments/environment';
import { projectType } from 'src/Shared/Models/projectType';
import { ProjectTypeService } from 'src/Shared/Services/project-type.service';
import { organization } from 'src/Shared/Models/organization';
import { OrganizationService } from 'src/Shared/Services/organization.service';
import { pipe } from 'rxjs';
import { client } from 'src/Shared/Models/client';
import { ClientService } from 'src/Shared/Services/client.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
  departments: department[]
  department: department
  lstEmployees: employee[]
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
  Id: number
  projectObj: any
  milestonInLst: mileStone
  lstOfMilestones: mileStone[]
  lstoddocproj: ProjectDocuments[]
  lstOfProjectTeams: projectTeam[]
  ProjectTeam: projectTeam
  displayBasic: boolean;
  displayMile: boolean;
  displayteam: boolean;
  displaydoc: boolean
  lstOfprojectPosition: projectPosition[]
  docproject: ProjectDocuments
  teamname: any
  team: Team
  emploeeObj: employee
  lstProjectTypes: projectType[];
  lstOrganizations: organization[];
  lstClients: client[];

  projectid: number

  constructor(private positionService: ProjectPositionService, private employeeService: EmployeeService, private departmentService: DepartmentService, private route: ActivatedRoute, private milestoneservice: MilestoneService, private projectService: ProjectService,
    private stackholderService: StackholdersService,
    private httpClient: HttpClient,
    private projectteamservice: ProjectTeamService,
    private projectPositionService: ProjectPositionService,
    private projectdocumentsservice: ProjectDocumentService,
    private projectTypeService: ProjectTypeService,
    private activeRoute: ActivatedRoute,
    private organizationService: OrganizationService,
    private messageService: MessageService,
    private clientService: ClientService) { }

  ngOnInit(): void {
    this.lstOfprojectPosition = []
    this.lstOfStackholder = []
    this.lstOfMilestones = []
    this.lstoddocproj = []
    this.lstOfProjectTeams = []
    
    this.projectid = this.activeRoute.snapshot.params['id'];
    this.clientService.GetAllClients().subscribe(
      res => { this.lstClients = res },
      err => console.log(err)
    )
    this.docproject = {
      Description: '', documentName: '', documentFile: '', id: 0, projectId: 0
    }
    this.emploeeObj = {
      address: '', dateOfBirth: new Date(), departmentId: 0, departmentName: '', email: '', employeeCode: ''
      , employeeName: '', gender: '', hiringDateHiringDate: new Date(), id: 0, maritalStatus: '', mobile: '', phone: '', photo: '', position: ''
    }
    this.team = {
      Id: 0, Name: ''
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
    this.ProjectTeam = {
      teamId: 0, teamName: '',
      departmentId: 0, id: 0, projectName: '', departmentName: '',
      employeeId: 0, employeeName: '',
      projectId: this.id, projectPositionId: 0, projectPositionName: ''
    }
    this.docproject = {
      Description: '', documentName: '', documentFile: '', id: 0, projectId: 0
    }
    this.projectObj = {
      actualEndDate: new Date(), listOfdocuments: [], listofprojectteam: [], id: 0, organizationId: 0, projectPeriod: 0, clientMobile: '', clientName: '', organizationName: '', projectTypeName: '',
      planndedEndDate: new Date(), planndedStartDate: new Date(), projectCode: '', listOfStackholders: [], listOfmilestones: [], projectTypeId: 0,
      projectName: '', actualStartDate: new Date(), clientId: 0, cost: 0, description: '', employeeId: 0
    }
    this.id = this.route.snapshot.params['id'];
    this.stackholderInLst.projectId = Number(this.id)
    this.milestonInLst.projectId = Number(this.id)
    this.ProjectTeam.projectId = Number(this.id)
    this.docproject.projectId = Number(this.id)

    this.projectService.getProjectById(this.id).subscribe(res => {
      this.projectObj = res;
      this.employeeService.getEmpByID(this.projectObj.employeeId).subscribe(res => {
        this.emploeeObj = res;
        console.log("employee", this.emploeeObj.employeeName)

      })
    })
    this.projectTypeService.GetAllProjectTypes().subscribe(
      data => { this.lstProjectTypes = data },
      err => console.log(err)
    )
    this.employeeService.GetAllEmployees().subscribe(
      res => {
        this.lstEmployees = res
        console.log("lstEmp", this.lstEmployees)
      },
      err => console.log(err))
    this.organizationService.GetAllOrganizations().subscribe(
      res => { this.lstOrganizations = res },
      err => console.log(err)
    )
  
    this.projectPositionService.GetAllProjectPosition().subscribe(e => {
      this.lstOfprojectPosition = e
      console.log("lstof position", this.lstOfprojectPosition)
    })
  
    this.employeeService.GetAllEmployees().subscribe(
      res => {
        this.lstEmployees = res
        console.log("lstEmp", this.lstEmployees)
      },
      err => console.log(err)
    )

   

    this.stackholderService.GetAllStackholdersByProjectID(this.id).subscribe(e => {
      // this.stackholders = e
      this.projectObj.listOfStackholders = e
    })
    //milestone
    this.milestoneservice.GetAllMileStonesByProjectID(this.id).subscribe(m => {
      this.mileStones = m;
      this.projectObj.listOfmilestones = m
    }), err => console.log(err)

    this.projectteamservice.GetAllTeamsByProjectID(this.id).subscribe(t => {
      this.teams = t;
      this.project1.listofprojectteam = this.teams;
      this.projectObj.listofprojectteam = t
      console.log(this.projectObj.listofprojectteam)
    }), err => console.log(err)

    this.projectdocumentsservice.GetAllDocumentsByProjectID(this.id).subscribe(d => {
      this.documents = d;
      this.project1.listOfdocuments = this.documents;
      this.projectObj.listOfdocuments = d;
      console.log("doc", d)
    }), err => console.log(err)


  }
  Savetolist_Stackholders() {
    this.stackholderInLst.projectId = Number(this.stackholderInLst.projectId)
    this.lstOfStackholder.push(this.stackholderInLst);
    console.log(this.stackholderInLst)
    this.stackholderInLst = {
      description: '', id: 0, mobile: '', projectId: this.id, rank: '', stackeholderName: ''
    }
  }


  SaveToDB_Stackholders() {
    this.stackholderService.insertListOfStackholders(this.lstOfStackholder).subscribe(e => {
      this.lstOfStackholder = []
      this.stackholderService.GetAllStackholdersByProjectID(this.id).subscribe(e => {
        this.stackholders = e
        this.projectObj.listOfStackholders = e
      })
    })
  }
  Savetolist_Milestones() {
    this.milestonInLst.projectId = Number(this.stackholderInLst.projectId)
    this.lstOfMilestones.push(this.milestonInLst);
    this.milestonInLst = {
      description: '', id: 0, endDate: new Date(), projectId: this.id, startDate: new Date(), title: ''
    }
  }
  SaveToDB_Milestones() {
    this.milestoneservice.insertListOfMilestoness(this.lstOfMilestones).subscribe(e => {
      this.lstOfMilestones = []
      this.milestoneservice.GetAllMileStonesByProjectID(this.id).subscribe(m => {
        this.projectObj.listOfmilestones = m
      }), err => console.log(err)
    })
  }
  edit() {

    // console.log("id",this.projectid)
    this.projectService.updateProject(this.projectid, this.projectObj).subscribe(res => {

      //console.log("update project", res)
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Successfully' });
      //alert('Updated Successfully.');

    }), err => console.log(err)

    // this.stackholderService.updatestakeholdersbyprojectid(this.projectObj.listOfStackholders).subscribe(res => {
    //   console.log(res)
    // })

  }
  delStakeHolders(id: number) {
    this.stackholderService.deletestakeholder(id).subscribe(res => {
      this.stackholderService.GetAllStackholdersByProjectID(this.id).subscribe(e => {
        this.stackholders = e
        this.projectObj.listOfStackholders = e
      })
    })
  }
  delMile(id: number) {
    this.milestoneservice.deletemilestone(id).subscribe(res => {
      // this.ngOnInit()
      this.milestoneservice.GetAllMileStonesByProjectID(this.id).subscribe(m => {
        this.projectObj.listOfmilestones = m
      }), err => console.log(err)
    })
  }

  delteam(id: number) {
    this.projectteamservice.deleteteam(id).subscribe(res => {
      this.projectteamservice.GetAllTeamsByProjectID(this.id).subscribe(t => {
        this.teams = t;
        this.project1.listofprojectteam = this.teams;
        this.projectObj.listofprojectteam = t
        console.log(this.projectObj.listofprojectteam)
      }), err => console.log(err)

    })
  }
  delDocument(id: number) {
    console.log(id)
    this.projectdocumentsservice.deletedocument(id).subscribe(res => {
      this.ngOnInit()
    })
  }

  showMaximizableDialog() {
    this.displayMaximizable = true;

  }
  showModalDialog() {
    this.displayModal = true;
  }

  showBasicDialog() {
    this.displayBasic = true;
  }
  showmileDialog() {
    this.displayMile = true;
  }
  showteamDialog() {
    this.displayteam = true
  }
  showdocDialog() {
    this.displaydoc = true
  }
  Savetolist_Teams() {

    this.ProjectTeam.projectId = Number(this.id)
    this.ProjectTeam.departmentId = Number(this.ProjectTeam.departmentId)
    this.ProjectTeam.employeeId = Number(this.ProjectTeam.employeeId)
    this.ProjectTeam.projectPositionId = Number(this.ProjectTeam.projectPositionId)
    this.ProjectTeam.departmentName = this.department.name
    this.employeeService.getEmpByID(this.ProjectTeam.employeeId).subscribe(e => {
      this.ProjectTeam.employeeName = e.employeeName
      this.positionService.getPositionByID(this.ProjectTeam.projectPositionId).subscribe(e => {
        this.ProjectTeam.projectPositionName = e.positionName
        this.teamname = this.team.Name;
        // this.ProjectTeam.TeamId=Number(this.team.Id);
        this.ProjectTeam.teamId = 29;
        this.lstOfProjectTeams.push(this.ProjectTeam);
        this.ProjectTeam = {
          teamName: '',
          teamId: 0,
          departmentId: 0, id: 0, departmentName: '', employeeName: '', projectPositionId: 0, projectPositionName: '', employeeId: 0
          , projectId: this.id, projectName: ''
        }
      })
    })
  }
  Idteam: any
  tasneem: number;

  SaveToDB_ProjectTeams() {
    var addTeamObj = new CreateTeamVM();
    addTeamObj.name = this.team.Name;
    addTeamObj.projectTeams = this.lstOfProjectTeams;

    this.projectService.addTeam(addTeamObj).subscribe(e => {
      this.Idteam = e;
      this.tasneem = this.Idteam;
    })


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
  Savedoctolist() {
    this.lstoddocproj.push(this.docproject);
    this.docproject = {
      Description: '', documentName: '', id: 0, documentFile: '', projectId: this.id
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
    this.docproject.documentFile = fileToUpload.name;
    console.log(fileToUpload.name)

    this.httpClient.post(environment.uploadFile, formData)
      .subscribe(res => {
        console.log(res)
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Uploaded Successfully' });

        // alert('Uploaded Successfully.');



      });
  }
  SaveDocuentToDB() {

    this.projectdocumentsservice.postProjectDocumentByProjectID(this.lstoddocproj).subscribe(e => {
      this.projectdocumentsservice.GetAllDocumentsByProjectID(this.id).subscribe(d => {
        this.documents = d;
        this.project1.listOfdocuments = this.documents;
        this.projectObj.listOfdocuments = d;
      }), err => console.log(err)
    })
  }
  downloadFile(fileName) {
    var filePath = `${environment.Domain}wwwroot/documentFiles/${fileName}`;


    window.open(filePath);
    // this.projectdocumentsservice.downloadInFile(fileName).subscribe(file => {
    //   var dwnldFile = filePath  + fileName;
    //   if (fileName != "" || fileName != null)
    //     window.open(dwnldFile);
    // })
  }
}
