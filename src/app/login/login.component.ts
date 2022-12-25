import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) : void
  {
    console.log("FOrm is submitted");
    console.log( loginForm.value);
    // console.log(loginForm.userName);
    // console.log(loginForm.userPassword);
  }

}
