import { Time } from "@angular/common"

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
    // projectManager:string
    requestTime:any
    requestDate:Date
    assetId:number
    requestModeId:number
    requestStatusId:number
    requestStatus:string
    requestPeriorityId:number
    requestPeriority:string
    requestTypeId:number
    requestTypeName:string
    description:string
    IsSolved:boolean
    IsAssigned:boolean
}
