import { Component, OnInit } from '@angular/core';
import { request } from 'src/Shared/Models/request';
import { RequestService } from 'src/Shared/Services/request.service';

@Component({
  selector: 'app-all-client-requests',
  templateUrl: './all-client-requests.component.html',
  styleUrls: ['./all-client-requests.component.css']
})
export class AllClientRequestsComponent implements OnInit {

  lstRequests: request[]
  clientID: number
  clientName: string
  role: string;
  constructor(private requestService: RequestService) { }
  ngOnInit(): void {
    console.log("clientID", localStorage.getItem("clientId"))
    this.role = localStorage.getItem("roles")
    if (this.role == "Client") {
      this.clientID = Number(localStorage.getItem("clientId"))
      this.requestService.GetRequestsByClientId(this.clientID).subscribe(e => {
        this.lstRequests = e
        console.log("reqs", this.lstRequests)
        this.lstRequests.forEach(element => {
          this.clientName = element.clientName
        });
      })
    }

    console.log(this.clientID)

    // localStorage.getItem()

  }

}
