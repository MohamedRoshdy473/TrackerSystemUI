import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { request } from 'src/Shared/Models/request';
import { RequestService } from 'src/Shared/Services/request.service';

@Component({
  selector: 'app-all-manager-requests',
  templateUrl: './all-manager-requests.component.html',
  styleUrls: ['./all-manager-requests.component.css']
})
export class AllManagerRequestsComponent implements OnInit {
  lstRequests: request[]

  constructor(private requestService: RequestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.lstRequests = []
    this.requestService.GetAllRequests().subscribe(e => {
      this.lstRequests = e
      console.log(this.lstRequests)
    })
  }
  assignRequests(reqId: number) {
    console.log(reqId)
    this.router.navigate(['home/assignReq', reqId]);
  }

}
