import { Component, OnInit } from '@angular/core';
import { request } from "../../../../Shared/Models/request";
import { RequestService } from "../../../../Shared/Services/request.service";
import { RequestTypeService } from "../../../../Shared/Services/request-type.service";
import { RequestPeriorityService } from "../../../../Shared/Services/request-periority.service";
import { RequestStatusService } from "../../../../Shared/Services/request-status.service";
import { ProjectService } from "../../../../Shared/Services/project.service";
import { RequestSubCategoryService } from "../../../../Shared/Services/request-sub-category.service";
import { requestPeriority } from 'src/Shared/Models/requestPeriority';
import { requestSubCategory } from 'src/Shared/Models/requestSubCategory';
import { requestStatus } from 'src/Shared/Models/requestStatus';
import { requestType } from 'src/Shared/Models/requestType';
import { project } from 'src/Shared/Models/project';
import { time, timeStamp } from 'console';


@Component({
  selector: 'app-create-requeste',
  templateUrl: './create-requeste.component.html',
  styleUrls: ['./create-requeste.component.css']
})
export class CreateRequesteComponent implements OnInit {
  
  lstReqests:request[]
  requestObj:request
  lstReqTypies:requestType[]
  lstReqPeriorities:requestPeriority[]
  lstReqStatus:requestStatus[]
  lstReqSubCategories:requestSubCategory[]
  lstProjects:project[]
  constructor(private reqService:RequestService,
    private reqPeriorityService:RequestPeriorityService,
    private reqStatusService:RequestStatusService,
    private reqTypeService:RequestTypeService,
    private projectService:ProjectService,
    private ReqSubCatService:RequestSubCategoryService,


    ) { }

  ngOnInit(): void {
    this.lstReqests = []
    this.lstProjects = []
    this.lstReqPeriorities= []
    this.lstReqTypies = []
    this.lstReqStatus = []
    this.lstReqSubCategories = []
    this.requestObj = {
      id:0,projectId:0,projectName:'',requestCode:'',
      requestName:'',requestPeriority:'',requestPeriorityId:0,
      requestStatus:'',requestStatusId:0,requestTime:'',RequestDate:new Date(),
      requestSubCategoryId:0,requestSubCategoryName:'',
      requestTypeId:0,requestTypeName:'',description:''
    }
    this.reqStatusService.GetAllRequestStatus().subscribe(e=>{
      this.lstReqStatus = e
    })
    this.projectService.GetAllProjects().subscribe(e=>{
      this.lstProjects = e
    })
    this.reqTypeService.GetAllRequestsTypes().subscribe(e=>{
      this.lstReqTypies = e
      console.log("lstRqType",this.lstReqTypies)

    })
    this.reqStatusService.GetAllRequestStatus().subscribe(e=>{
      this.lstReqStatus = e
      console.log("lstStatus",this.lstReqStatus)
    })
    this.reqPeriorityService.GetAllRequestPeriorties().subscribe(e=>{
      this.lstReqPeriorities = e
      console.log("lstPeriority",this.lstReqPeriorities)
    })
    this.ReqSubCatService.GetAllSubCategorys().subscribe(e=>{
      this.lstReqSubCategories = e
    })
  }
  AddRequest(){
    console.log(this.requestObj)
    this.reqService.inserRequest(this.requestObj).subscribe(e=>{
      console.log(this.requestObj)
      this.requestObj = {
        description:'',requestTypeName:'',requestTypeId:0,requestSubCategoryName:'',requestSubCategoryId:0,
        id:0,requestStatusId:0,requestPeriorityId:0,requestName:'',requestCode:'',projectName:'',projectId:0,
        requestPeriority:'',requestStatus:'',RequestDate:new Date(),requestTime:new time()
      }
    })
  }

}
