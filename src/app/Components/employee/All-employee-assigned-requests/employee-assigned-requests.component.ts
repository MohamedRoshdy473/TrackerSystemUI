import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { request } from 'src/Shared/Models/request';
import { RequestImage } from 'src/Shared/Models/RequestImages';
import { EmployeeService } from 'src/Shared/Services/employee.service';
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
  reqImages: RequestImage []
  NewclientDialogbool:boolean=false

  constructor(private empService: EmployeeService, 
    private router: Router
    ,
    private requestService: RequestService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.lstAssignedReq = []
    this.EmpId = Number(localStorage.getItem('id'))
    this.requestService.GetAllRequestByEmployeeId(this.EmpId).subscribe(e => {
      this.loading = false;

      this.lstAssignedReq = e
      console.log(this.lstAssignedReq)
    })
    this.lstAssignedReq = []
  }
  onReject() {
    this.messageService.clear('c');
  }
  viewAllImages(reqId: number) {
    this.NewclientDialogbool = true
    this.requestService.GetRequestImageByRequestId(reqId).subscribe(e => {
      console.log(e)
      this.reqImages = e
    })

   
  }
  viewSingleDoc(imgObj){
    var filePath = `${environment.Domain}wwwroot/requestImage/${imgObj.imageName}`;
    window.open(filePath);
  }
  assignRequests(id: number) {
    console.log(id)
    this.router.navigate(['home/assignemployeerequest', id]);
  }

}
