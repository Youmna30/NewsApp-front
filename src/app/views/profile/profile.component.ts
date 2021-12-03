import { Component, OnInit } from '@angular/core';
import { Reporter } from 'src/app/interface/reporter';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: ProfileService) { }
  reporter:Reporter={}
  getData(){
    this.userService.getProfile().subscribe({
      next:(res:any)=>{
       console.log(res);
        this.reporter = res
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }
  ngOnInit(): void {
    this.getData()
  }

}
