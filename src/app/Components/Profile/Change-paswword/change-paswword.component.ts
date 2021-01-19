import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/Shared/Services/auth.service'
import { EmployeeService } from 'src/Shared/Services/employee.service';

@Component({
  selector: 'app-change-paswword',
  templateUrl: './change-paswword.component.html',
  styleUrls: ['./change-paswword.component.css']
})
export class ChangePaswwordComponent implements OnInit {
  Newpassword: string;

  model: any = {};
  empId: number;
  employeeEmail:any
  confirmedPassword:any

  constructor(private AuthService: AuthService, 
    private router: Router, 
    public formBuilder: FormBuilder,
    private empService:EmployeeService
    ) 
  {
  }



  ngOnInit(): void {
    this.employeeEmail = ''
    this.empId=Number(localStorage.getItem('id'))
    this.empService.getEmpByID(this.empId).subscribe(w=>{
      this.employeeEmail = w.email
      
    })
  }
  onSubmit()
  {
    this.AuthService.changPassword(this.Newpassword).subscribe(
      data=>this.router.navigate(['/login']),
      error=>console.log(error)
    )
  }
  // password(formGroup: FormGroup) {
  //   const { value: password } = formGroup.get('password');
  //   const { value: confirmPassword } = formGroup.get('confirmpassword');
  //   return password === confirmPassword ? null : { passwordNotMatch: true };
  // }
  // onSubmit() {
  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  // }
}
