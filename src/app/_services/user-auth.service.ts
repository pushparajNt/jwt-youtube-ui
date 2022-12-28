import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }


  public setRoles(roles:[])
  {
    localStorage.setItem("roles",JSON.stringify(roles));
  }

  public getRoles():[]
  {
    console.log("printing roles:");
    console.log(JSON.parse(localStorage.getItem('roles') || 'null' ||'{}' ));
    return JSON.parse(localStorage.getItem('roles') || 'null' ||'{}' );
  }

  public setJwtToken(jwtToken:string)
  {
    localStorage.setItem('jwtToken',jwtToken);
  }

  public getJwtToken():string
  {
    return localStorage.getItem('jwtToken') || 'null' || '{}';
  }

  public clear()
  {
    localStorage.clear();
  }

  public isLoggedin()
  {
    return this.getRoles() && this.getJwtToken();
  }
}
