import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isInvalidLogin:Boolean = false
  user:any
  token:any

  constructor(private loginService: AuthService, private router:Router) { }
  login(credentials:any){
    this.loginService.signIn(credentials).subscribe({
      next:(res:any) => {
        console.log(res);
        console.log(res);
        this.user = res
        this.token = this.user.token
        localStorage.setItem("token",this.token)
        this.router.navigate(['/profile'])
      },
      error:(err:any)=>{
        this.isInvalidLogin = true
        console.log(err);
        
      }
    })
  }
  onChange(){    
    this.isInvalidLogin = false
  }
  ngOnInit(): void {
    this.login
  }
}
