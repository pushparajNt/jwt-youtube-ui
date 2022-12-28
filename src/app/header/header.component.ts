import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 roleName : any="";
  constructor(private userAuthService:UserAuthService,
    private router:Router) { 
   

    }

  ngOnInit(): void {

    console.log("checking ngOnInit function");
    
  }

  ngOnChanges(){
    console.log("checking ng on change");
  }

  public isLoggedIn()
  {
    return this.userAuthService.isLoggedin();
  }

  public logout()
  {
    this.userAuthService.clear(); 
    this.router.navigate(['/home']);
  }

  public showDashBoard()
  {
   const roles: any[]= this.userAuthService.getRoles();
   const roleName=roles[0].roleName;
    this.roleName=this.userAuthService.getRoles();
   console.log("printing role name inside constructor");
   console.log(this.roleName);

  }

}
