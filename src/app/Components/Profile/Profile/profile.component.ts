import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employee } from 'src/Shared/Models/employee';
import { EmployeeService } from 'src/Shared/Services/employee.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  empId:number
  imgName:string
  employee:any
  constructor(
    private empService:EmployeeService,private router:Router
  ) { }

  ngOnInit(): void {
    this.employee = {
      address:'',departmentId:0,departmentName:'',employeeName:'',id:0,dateOfBirth:new Date
    }
    this.empId=Number(localStorage.getItem('id'))

    this.empService.getEmpByID(this.empId).subscribe(w=>{
      this.employee = w
      this.imgName=w.photo
    })
  }
  navigateToChangePassword(employee){
    console.log(employee)
    this.router.navigate(['home/changePassword']);

  }

}
