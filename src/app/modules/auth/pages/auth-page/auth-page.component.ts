import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-auth-page',
  standalone: false,

  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css',
})
export class AuthPageComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});

  constructor(private authService:AuthService) {}
  ngOnInit(): void {
    //https://docs.angular.lat/api/forms/FormGroup#description
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(12),
        Validators.minLength(6),
      ]),
    });
  }

  sendLogin():void{
    const {email,password}=this.formLogin.value
   //console.log('🤞🤞✌');
  this.authService.sendCredentials(email,password)
    }




}
