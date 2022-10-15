import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { LoginadminService } from '../loginadmin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin:Admin = new Admin();

  constructor(private loginadminservice: LoginadminService ) { }

  ngOnInit(): void {
  }

  adminLogin(){
    console.log(this.admin)
    this.loginadminservice.loginAdmin(this.admin).subscribe(data=>{
      alert("Login Successfully")
    },error=>alert("Login Failed"));
    
  }
}
