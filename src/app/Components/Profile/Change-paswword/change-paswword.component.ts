import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/Shared/Services/auth.service'
import { EmployeeService } from 'src/Shared/Services/employee.service';
import { MustMatch } from '../../../helpers/must-match.validator';

@Component({
  selector: 'app-change-paswword',
  templateUrl: './change-paswword.component.html',
  styleUrls: ['./change-paswword.component.css']
})
export class ChangePaswwordComponent implements OnInit {
  Newpassword: string;
  registerForm: FormGroup;
  model: any = {};
  empId: number;
  employeeEmail:any
  confirmedPassword:any
  passwordPattern:string
  submitted = false;

  constructor(private AuthService: AuthService, 
    private router: Router, 
    public formBuilder: FormBuilder,
    private empService:EmployeeService
    ) 
  {
  }



  ngOnInit(): void {
    // Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{9,})/)
    this.passwordPattern = "^[a-z0-9_-]{8,15}$"; 
    this.employeeEmail = ''
    this.empId=Number(localStorage.getItem('id'))
    this.empService.getEmpByID(this.empId).subscribe(w=>{
      this.employeeEmail = w.email
      
    })
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6),
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{9,})/)]],
     
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }
  // onSubmit()
  // {
  //   this.AuthService.changPassword(this.Newpassword).subscribe(
      
  //     data=>this.router.navigate(['/login']),
      
  //     error=>console.log(error)
  //   )
  //   // this.submitted = true;
  // }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    else{
    this.AuthService.changPassword(this.Newpassword).subscribe(
      
      data=>this.router.navigate(['/login']),
      
      error=>console.log(error)
    )}
    // display form values on success
   
} 
  get f() { return this.registerForm.controls; }
  
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
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
