import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { alertController } from '@ionic/core';
import { ComercioService } from '../services/comercio.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-cadastrocomercio',
  templateUrl: './cadastrocomercio.page.html',
  styleUrls: ['./cadastrocomercio.page.scss'],
})
export class CadastrocomercioPage implements OnInit {
  formulario : FormGroup
  constructor(private router:Router,private formbuilder:FormBuilder,
    public loadingController:LoadingController,
    public alertController: AlertController,
    private ComercioService:ComercioService,
    public navController:NavController ){ }

 

  ngOnInit() {
    this.formulario = this.formbuilder.group({
      user_id:1,
      name:["",Validators.required],
      email:["",Validators.required],
      cpf_cnpj:["",Validators.required],
      phone:["",Validators.required],
    })

  }
  async save(){
    const loading = await this.loadingController.create({
      message: 'Salvando...',
      translucent: true,
      backdropDismiss: true,
      cssClass: 'spinner-color-custon',
    });
    await loading.present();
    this.ComercioService.save(this.formulario.value).subscribe(res => {
      console.log(res)
      this.navController.navigateRoot("/home")
      loading.dismiss()
      // this.alertController.create("Salvo", "Usuario Cadastrado com sucesso");
    })
  }

}
