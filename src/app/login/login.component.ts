import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userName:String ="";
  userPassword:String="";


  constructor(private userService:UserService,
    private userAuthService:UserAuthService,
    private router:Router) { }

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
        console.log(response.jwtToken);
        console.log(response.user.role[0]);
        console.log(response.user.role[0].roleName);
        console.log(response.user.role[0].roleDescription);

        this.userAuthService.setJwtToken(response.jwtToken);
        this.userAuthService.setRoles(response.user.role);

        const role=response.user.role[0].roleName;

        if(role==='Admin')
        {
          this.router.navigate(['/admin']);
          
        }
        else
        {
          this.router.navigate(['user']);
        }
      },
      (error: any)=>{
        console.log(error);
      }
     );
  }

}
