import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../Shared/Services/login.service'
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [MessageService]
})
export class SignupComponent implements OnInit {
  email: any
  password: any
  role: string
  LoginedUserId: string;
  constructor(private loginSer: LoginService, private routee: Router, private messageService: MessageService) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  ngOnInit() {
  }
  getData() {

    this.loginSer.login(this.email, this.password)
      .subscribe(
        res => {
          localStorage.setItem("clientId", res["clientId"])
          console.log("res is ", res)
          localStorage.setItem("token", res["token"])
          localStorage.setItem("email", res["email"])
          localStorage.setItem("roles", res["roles"])
          localStorage.setItem("userName", res['userName']);
          localStorage.setItem("id", res['id']);
          localStorage.setItem("loginedUserId", res['loginedUserId']);
          this.role= localStorage.getItem("roles")
          // console.log(localStorage.getItem("email"))
          if (this.role == 'SuperAdmin'||this.role == 'PMO') {
            this.routee.navigate(['/home/piechart'])
            console.log(this.role)
          }
          if(this.role =='PM'){
            this.routee.navigate(['/home/projectManagerDashboard'])
            console.log(this.role)
          }
           if (this.role == 'Client') {
            this.routee.navigate(['/home/allClientReqts'])
            console.log(this.role)
          }
          if (this.role == 'TL') {
            this.routee.navigate(['/home/allTeamLeaderReqts'])
            console.log(this.role)
          }
          if (this.role == 'Employee') {
            this.routee.navigate(['/home/allEmpAssignedRequests'])
            console.log(this.role)
          }
          // else {
          //   this.routee.navigate(['/home/tabs'])
          //   console.log(this.role)
          // }
        }
        , error => {
          this.showTopCenter()
        });
    // localStorage.clear();
  }
  onReject() {
    this.messageService.clear('c');
  }
  clear() {
    this.messageService.clear();
  }

  showTopCenter() {
    this.messageService.add({ key: 'tc', severity: 'error', summary: 'Attention !!!', sticky: true, detail: 'User Name or password is incorrect' });
  }
  changePassword(){
    console.log(this.email)
    // routerLink="/changePassword"
  }

  // showSticky() {
  //   this.messageService.add({severity:'info', summary: 'Sticky', detail: 'Message Content', sticky: true});
  // }




}
