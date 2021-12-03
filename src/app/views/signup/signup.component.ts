import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }
  invalidCode:Boolean = false
  user:any
  token:any
  signUp(credentials:any){
    console.log(credentials);
    
    this.authService.signUp(credentials).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.user = res
        this.token = this.user.token
        localStorage.setItem("token",this.token)
        this.router.navigate(['/profile'])
      },
      error:(err:any)=>{
        console.log(err);
        console.log(err.error.code);
        
        if(err.error.code == 11000){
            this.invalidCode = true
        }
        
      }
    })
  }
  onChangeEmail(){    
    this.invalidCode = false
  }
  ngOnInit(): void {
    this.signUp
  }

}
