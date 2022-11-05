import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { alertController } from '@ionic/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
formulario : FormGroup
  constructor(private router:Router,private formbuilder:FormBuilder,
    public loadingController:LoadingController,
    public alertController: AlertController,
    public navController:NavController,
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
  async register(){
    const loading = await this.loadingController.create({
      message: 'Salvando...',
      translucent: true,
      backdropDismiss: true,
      cssClass: 'spinner-color-custon',
    });
    await loading.present();
    this.userService.register(this.formulario.value).subscribe(res => {
      console.log(res)
      this.navController.navigateRoot("/home")
      loading.dismiss()
      // this.alertController.create("Salvo", "Usuario Cadastrado com sucesso");
    })
  }
}
