import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { project } from '../../../../Shared/Models/project'
import { ProjectService } from '../../../../Shared/Services/project.service'
import {StackholdersService} from '../../../../Shared/Services/stackholders.service'
import {stackholder} from '../../../../Shared/Models/stackeholder'
@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit {

  projects: project[]
  project1: project
  stackholders:stackholder[]
  displayModal: boolean;
  displayModal2: boolean;
  displayMaximizable: boolean;

  constructor(private messageService:MessageService,private confirmationService:ConfirmationService,private projectService: ProjectService ,private stackholderService: StackholdersService) { }

  ngOnInit() {
    // this.projects = []
    this.projectService.GetAllProjects().subscribe(projects => {
      this.projects = projects
      console.log(this.projects)
    })
    this.project1 = {
      actualEndDate: new Date(), id: 0, organizationId: 0, projectPeriod: 0,clientMobile:'',clientName:'',organizationName:'',projectTypeName:'',
      planndedEndDate: new Date(), planndedStartDate: new Date(), projectCode: '',listOfStackholders:[],projectTypeId:0,
      projectName: '', actualStartDate: new Date(), clientId: 0, cost: 0, description: '', employeeId: 0
    }
  }
  showAllProjectDetails(projectID: number) {
    console.log(projectID)
  }
  showModalDialog() {
    this.displayModal = true;
    //this.displayMaximizable = true;

  }
  showMaximizableDialog(Projectid: number) {
    console.log(Projectid)
    this.projects.forEach(element => {
      if (element.id == Projectid) {
        this.project1 = element
        console.log(this.project1)
      }
      this.stackholderService.GetAllStackholdersByProjectID(Projectid).subscribe(e=>{
        this.stackholders = e
      console.log("e",e)

      this.project1.listOfStackholders = this.stackholders
      console.log("stackholders",this.stackholders)
      })
    });
    this.displayMaximizable = true;
  }
  confirm(id) {
    console.log(id)
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        console.log(id)
        this.projectService.DeleteProject(id).subscribe(
          data => {
            console.log(id,data)
            this.ngOnInit(),
              this.messageService.add({ severity: 'info', summary: 'Record Deleted!', detail: 'Record Deleted!' });
          }
        )
      }
    });
  }
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
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

  showTopLeft() {
    this.messageService.add({ key: 'tl', severity: 'info', summary: 'Info', detail: 'Message Content' });
  }

  showTopCenter() {
    this.messageService.add({ key: 'tc', severity: 'info', summary: 'Info', detail: 'Message Content' });
  }

  showBottomCenter() {
    this.messageService.add({ key: 'bc', severity: 'info', summary: 'Info', detail: 'Message Content' });
  }

  showConfirm() {
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' });
  }

  showMultiple() {
    this.messageService.addAll([
      { severity: 'info', summary: 'Message 1', detail: 'Message Content' },
      { severity: 'info', summary: 'Message 2', detail: 'Message Content' },
      { severity: 'info', summary: 'Message 3', detail: 'Message Content' }
    ]);
  }

  showSticky() {
    this.messageService.add({ severity: 'info', summary: 'Sticky', detail: 'Message Content', sticky: true });
  }

  onConfirm() {
    this.messageService.clear('c');
  }

  onReject() {
    this.messageService.clear('c');
  }

  clear() {
    this.messageService.clear();
  }
}