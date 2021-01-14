import { Component, OnInit } from '@angular/core';
 import { AuthService } from 'src/Shared/Services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { Directionality } from '@angular/cdk/bidi';

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
  role:string
  loggedInUserName:string

  constructor(private AuthService: AuthService, public translate: TranslateService, public dir: Directionality) {
    this.show = true;
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ar/) ? browserLang : 'en');
  }
  userName = localStorage.getItem("userName")
  ngOnInit(): void {
   this.role= localStorage.getItem('roles')
   this.loggedInUserName= localStorage.getItem('userName')
   console.log(this.role)
 

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
    document.getElementById("main").style.marginLeft= "0";
  }

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
