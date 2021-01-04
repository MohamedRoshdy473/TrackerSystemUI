import { Component, OnInit } from '@angular/core';
import { request } from 'src/Shared/Models/request';
import { RequestService } from 'src/Shared/Services/request.service';

@Component({
  selector: 'app-all-manager-requests',
  templateUrl: './all-manager-requests.component.html',
  styleUrls: ['./all-manager-requests.component.css']
})
export class AllManagerRequestsComponent implements OnInit {
lstRequests:request[]
  constructor(private requestService:RequestService) { }

  ngOnInit(): void {
    this.lstRequests = []
    this.requestService.GetAllRequests().subscribe(e=>{
      this.lstRequests = e
      console.log(this.lstRequests)
    })
  }

}
