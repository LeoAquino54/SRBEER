import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private router:Router,
    private userService:UserService) { }

  ngOnInit() {
    this.register()
  }

  signUPUser(){
 this.router.navigate(['login']);
  }
  register(){
    this.userService.usersall().subscribe(res => {
      console.log(res)
    })
  }
}
