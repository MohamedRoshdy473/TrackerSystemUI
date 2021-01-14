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
import { asset } from 'src/Shared/Models/asset';
import { requestMode } from 'src/Shared/Models/requestMode';
import { AssetService } from 'src/Shared/Services/asset.service';
import { RequestModeService } from 'src/Shared/Services/request-mode.service';
import { client } from 'src/Shared/Models/client';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RequestImage } from 'src/Shared/Models/RequestImages';
import { logging } from 'protractor';
import { projectTeam } from 'src/Shared/Models/projectTeam';
import { ProjectTeamService } from 'src/Shared/Services/project-team.service';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

@Component({
  selector: 'app-client-create-request',
  templateUrl: './client-create-request.component.html',
  styleUrls: ['./client-create-request.component.css']
})
export class ClientCreateRequestComponent implements OnInit {
  lstReqests: request[]
  requestObj: request
  reqObj: request
  ClientId: number
  projectId:number
  lstReqAssets: asset[]
  reqAsset: asset



  requestMode: requestMode
  lstReqTypies: requestType[]
  lstReqPeriorities: requestPeriority[]
  lstReqStatus: requestStatus[]
  lstReqSubCategories: requestSubCategory[]
  lstProjects: project[]
  lstclients: client[]
  lstProjectTeams:projectTeam[]
  lstRequestImages: RequestImage[]
  reqImage: RequestImage
   ProjId:number


  constructor(private reqService: RequestService,
    private httpClient: HttpClient,
    private projectTeamService:ProjectTeamService,
    private reqPeriorityService: RequestPeriorityService,
    private reqStatusService: RequestStatusService,
    private reqTypeService: RequestTypeService,
    private ReqAssetService: AssetService,
    private ReqModeService: RequestModeService,
    private projectService: ProjectService,
    private ReqSubCatService: RequestSubCategoryService,
  ) { }

  ngOnInit(): void {
    this.ClientId=Number(localStorage.getItem('clientId'))
    this.lstReqests = []
    this.lstProjects = []
    this.lstReqPeriorities = []
    this.lstReqTypies = []
    this.lstProjectTeams = []
    this.lstReqStatus = []
    this.lstRequestImages = []
    this.lstReqSubCategories = []
    this.reqImage = {
      id: 0, imageName: '', requestId: 0
    }
    this.reqObj = {
      id: 0, projectId: 0, projectName: '', requestCode: '',clientName:'',teamId:0,teamName:'',IsAssigned:false,
      requestName: '', requestPeriority: '', requestPeriorityId: 0,IsSolved:false,projectTeamId:0,
      requestStatus: '', requestStatusId: 0, requestTime: new Date().getHours() + ':' + new Date().getMinutes(), requestDate: new Date(),
      requestSubCategoryId: 0, requestSubCategoryName: '', assetId: 0, clientId: this.ClientId,
      requestTypeName: '', description: '', requestModeId: 0,RequestProblemObj:{requestId:0,id:0,problemId:0,problemName:'',requestName:''}
    }
    this.requestObj = {IsAssigned:false,IsSolved:false,RequestProblemObj:{requestId:0,id:0,problemId:0,problemName:'',requestName:''},
      id: 0, projectId: 0, projectName: '', requestCode: '', clientName: '',
      requestName: '', requestPeriority: '', requestPeriorityId: 0,teamName:'',projectTeamId:0,requestTypeName:'',teamId:0,
      requestStatus: '', requestStatusId: 0, requestTime: new Date().getHours() + ':' + new Date().getMinutes(), requestDate: new Date(),
      requestSubCategoryId: 0, requestSubCategoryName: '', assetId: 0, clientId: this.ClientId, description: '', requestModeId: 0
    }
    this.reqAsset = {
      assetCode: '', assetName: '', id: 0
    }
    this.requestMode = {
      Mode: '', id: 0
    }
    this.projectService.GetAllProjects().subscribe(e => {
      this.lstProjects = e
    })
    this.reqTypeService.GetAllRequestsTypes().subscribe(e => {
      this.lstReqTypies = e
      console.log("lstRqType", this.lstReqTypies)
    })
    this.reqStatusService.GetAllRequestStatus().subscribe(e => {
      this.lstReqStatus = e
      console.log("lstStatus", this.lstReqStatus)
    })
    this.reqPeriorityService.GetAllRequestPeriorties().subscribe(e => {
      this.lstReqPeriorities = e
      console.log("lstPeriority", this.lstReqPeriorities)
    })
    this.ReqSubCatService.GetAllSubCategorys().subscribe(e => {
      this.lstReqSubCategories = e
    })
    this.ReqAssetService.GetAllAssets().subscribe(e => {
      this.lstReqAssets = e
      console.log(this.lstReqAssets)

    })
    // this.ReqModeService.GetAllRequetsMode().subscribe(e => {
    //   this.lstRequestMode = e
    //   console.log(this.lstRequestMode)
    // })

  }
  GetProjectTeamId(TeamId){
    this.projectTeamService.GetProjectTeamByProjectIdAndTeamIdAndProjectPositionId(this.projectId,TeamId.value)
    .subscribe(e=>{
       this.ProjId= e.id
      console.log("projectTeamId",e.id)
      this.reqObj.projectTeamId = this.ProjId
      console.log("aftergetProjTeamid",this.reqObj)
    })
  }
  reqId: any
  AddRequest() {
    this.reqObj.requestStatusId=1  //open
    this.reqObj.projectId = Number(this.reqObj.projectId)
    this.reqObj.clientId = Number(this.reqObj.clientId)
    console.log(this.reqObj)
    // this.reqObj.clientId = this.ClientId
    this.reqObj.requestModeId = 5 //meaning it refer to 'By the Client Option'
    this.reqService.inserRequest(this.reqObj).subscribe(e => {
      console.log(e)
      this.reqId = e;
      this.reqImage.requestId = this.reqId;
    })
  }
  onChange(event) {
    this.projectId = event.value
    this.projectTeamService.GetProjectTeamsByProjectId(this.projectId).subscribe(e=>{
      this.lstProjectTeams = e
      console.log("lstproTeams",this.lstProjectTeams)
    })
    this.projectService.GetProjectsByClientId(this.projectId).subscribe(e => {
      this.lstclients = e
      console.log(e)
    })


  }

  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.reqImage.imageName = fileToUpload.name;
    console.log(fileToUpload.name)

    this.httpClient.post(environment.uploadImage, formData)
      .subscribe(res => {
        console.log(res)
        alert('Uploaded Successfully.');

      });
    this.lstRequestImages.push(this.reqImage);
    this.reqImage = {
      id: 0, imageName: '', requestId: this.reqId
    };
  }
  SaveimageToDB() {

    this.reqService.addListRequestImages(this.lstRequestImages).subscribe(e => {
      console.log(e)
      this.reqObj = {
        description: '', requestTypeName: '', requestSubCategoryName: '', requestSubCategoryId: 0,projectTeamId:0,IsSolved:false,IsAssigned:false,
        id: 0, requestStatusId: 0, requestPeriorityId: 0, requestName: '', requestCode: '', projectName: '', projectId: 0,teamName:'',teamId:0,clientName:'',
        requestPeriority: '', requestStatus: '', requestDate: new Date(), requestTime: '', requestModeId: 0, assetId: 0, clientId: 0,RequestProblemObj:{requestId:0,id:0,problemId:0,problemName:'',requestName:''}
      }
    })

  }

}
                                 