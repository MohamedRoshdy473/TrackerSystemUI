import { Time } from "@angular/common"
import { RequestProblems } from "./requestProblems"

export class request {
    id :number
    requestName: string
    requestCode: string
    requestSubCategoryId:number
    requestSubCategoryName:string
    projectId:number
    clientId:number
    clientName:string
    projectName:string
    // problemName:string
    // projectManager:string
    teamId:number
    teamName:string
    projectTeamId:number
    requestTime:any
    requestDate:Date
    assetId:number
    requestModeId:number
    requestStatusId:number
    requestStatus:string
    requestPeriorityId:number
    requestPeriority:string
    //requestTypeId:number
    RequestProblemObj:RequestProblems
    requestTypeName:string
    description:string
    IsSolved:boolean
    IsAssigned:boolean
}
