import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; 
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  constructor( private auth: AuthService  ) { }

  initForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
       password:new FormControl('',[Validators.required,Validators.minLength(6)])
       //given optional for validations but disabled in html
    })
  }
  get authf(){
    return this.loginForm.controls;
  }
  loginform(){
   this.auth.loginUser(this.loginForm.value);
     }
 }
 
 




 