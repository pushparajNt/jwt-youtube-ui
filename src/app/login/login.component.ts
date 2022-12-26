import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userName:String ="";
  userPassword:String="";


  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm)
  {
    console.log("FOrm is submitted");
    console.log( loginForm.value);
     console.log(this.userName);
     console.log(this.userPassword);

     this.userService.login(loginForm.value).subscribe(
      (response: any)=>{
        console.log(response);
      },
      (error: any)=>{
        console.log(error);
      }
     );
  }

}
