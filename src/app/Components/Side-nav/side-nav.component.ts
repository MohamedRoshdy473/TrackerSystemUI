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
  //direction = 'ltr';

  textDir: string = "ltr";
  selectedlang: string = '';

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
 
    localStorage.removeItem("lang");
    this.show = true;
    translate.addLangs(['English', 'العربية']);
    this.selectedlang = 'العربية';
    this.textDir = "rtl"; 
      translate.use(this.selectedlang);
  //  localStorage.setItem("lang", "English");
  //  translate.setDefaultLang('English');
 
    console.log("selectedlang",this.selectedlang);
  //  console.log("langlang",localStorage.getItem("lang"));

   // const browserLang = translate.getBrowserLang();
   // translate.use(browserLang.match(/English|العربية/) ? browserLang : 'English');
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
  switchLang(lang: string) {
    this.textDir = "";
    this.selectedlang =lang;
    console.log("lang", lang)

    if (lang == "English") {
      this.textDir = "ltr";
      this.selectedlang =lang;
  //    localStorage.setItem("lang", lang);
    }
    else if (lang == "العربية") {
      this.textDir = "rtl";
      this.selectedlang =lang;
  //    localStorage.setItem("lang", lang);
    }
    this.translate.use(lang)
   // localStorage.setItem("lang", lang);

   // this.selectedlang = lang;
    this.translate.setDefaultLang(lang);

    console.log("textDir", this.textDir);
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
}
