import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
formulario : FormGroup
  constructor(private router:Router,private formbuilder:FormBuilder,
    private userService:UserService) { }

  ngOnInit() {
    this.formulario = this.formbuilder.group({
      name:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required],
      cep:["",Validators.required],
      phone:["",Validators.required],
    })
  }

  signUPUser(){
 this.router.navigate(['login']);
  }
  register(){
    this.userService.register(this.formulario.value).subscribe(res => {
      console.log(res)
    })
  }
}
