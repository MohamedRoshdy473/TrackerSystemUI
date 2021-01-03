import { Component, OnInit } from '@angular/core';
import { request } from 'src/Shared/Models/request';
import { RequestService } from 'src/Shared/Services/request.service';

@Component({
  selector: 'app-all-client-requests',
  templateUrl: './all-client-requests.component.html',
  styleUrls: ['./all-client-requests.component.css']
})
export class AllClientRequestsComponent implements OnInit {

  lstRequests:request[]
  clientID:number
  clientName:string
  constructor(private requestService:RequestService) { }
  ngOnInit(): void {
  this.clientID = Number(localStorage.getItem("id")) 

    console.log(this.clientID)  

    // localStorage.getItem()
    this.requestService.GetRequestsByClientId(this.clientID).subscribe(e=>{
      this.lstRequests = e
      console.log("reqs",this.lstRequests)
      this.lstRequests.forEach(element => {
        this.clientName = element.clientName
      });
    })
  }

}
