import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{AuthService} from 'src/Shared/Services/auth.service'

@Component({
  selector: 'app-change-paswword',
  templateUrl: './change-paswword.component.html',
  styleUrls: ['./change-paswword.component.css']
})
export class ChangePaswwordComponent implements OnInit {
  Newpassword:string;
  constructor(private AuthService:AuthService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(event)
  {
    this.AuthService.changPassword(this.Newpassword).subscribe(
      data=>this.router.navigate(['/login']),
      error=>console.log(error)
    )
  }
}
