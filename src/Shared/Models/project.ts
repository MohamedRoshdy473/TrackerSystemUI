import {stackholder} from '../Models/stackeholder'
export class project {
     id:number;
     projectName:string       
     projectCode:string  
     projectTypeId:number              
     projectTypeName:string              
     cost:number              
     projectPeriod :number
     clientName:string
     clientMobile:string
     organizationName:string
     planndedStartDate:Date 
     actualStartDate:Date   
     planndedEndDate:Date   
     actualEndDate:Date     
     description:string       
     organizationId:number                       
     employeeId:number                                           
     clientId:number  
    listOfStackholders:stackholder[] ///Extra to show stackholders for each project

  }