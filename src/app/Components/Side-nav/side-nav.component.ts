import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/Shared/Services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { Directionality } from '@angular/cdk/bidi';
import { EmployeeService } from 'src/Shared/Services/employee.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ClientService } from 'src/Shared/Services/client.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  IsAdmin: any;
  IsUser: any;
  show: boolean;
  direction = 'ltr';
  role: string
  loggedInUserName: string
  empId: number
  imgName: string
  clientImage: string
  clientId: number
  getimage: any
  constructor(private AuthService: AuthService,
    public translate: TranslateService,
    public dir: Directionality,
    private empService: EmployeeService,
    private route: Router,
    private clientService: ClientService,
  ) {
 
    this.show = true;
    translate.addLangs(['English', 'العربية']);
    translate.setDefaultLang('English');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/English|العربية/) ? browserLang : 'English');
  }

  userName = localStorage.getItem("userName")
  ngOnInit(): void {
    this.getimage = environment.Domain



    this.role = localStorage.getItem('roles')
    this.loggedInUserName = localStorage.getItem('userName')
    console.log(this.role)
    if (this.role == "Client") {
      this.clientId = Number(localStorage.getItem("clientId"))
      console.log("this.clientId", this.clientId)
      this.clientService.GetclientByID(this.clientId).subscribe(w => {
        console.log(w["photo"])
        this.clientImage = w["photo"]
      })
    }
    if (this.role != "Client") {
      this.empId = Number(localStorage.getItem('id'))
      //console.log(localStorage.getItem('id')) 
      this.empService.getEmpByID(this.empId).subscribe(w => {
        console.log(w)
        this.imgName = w.photo
      })

    }
  }
  logout() {
    this.AuthService.logout();
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  goToProfile() {
    this.route.navigate(['home/profile']);

  }
  // changeDirection(){
  //   this.direction =!this.direction
  // }
  //   changeDir($event) {
  //     //debugger;
  //     //console.log($event.target.value);
  //     // this.translate.use($event.target.value);
  //     sessionStorage.setItem("lang", $event.target.value);


  //     if ($event.target.value === 'English') {
  //       localStorage.setItem('dir', 'ltr');
  //     }
  //     if ($event.target.value === 'العربية') {
  //       localStorage.setItem('dir', 'rtl');
  //     }

  // console.log("test",this.dir)
  //   }
}
