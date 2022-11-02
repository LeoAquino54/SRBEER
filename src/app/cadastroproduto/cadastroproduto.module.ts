import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroprodutoPageRoutingModule } from './cadastroproduto-routing.module';

import { CadastroprodutoPage } from './cadastroproduto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroprodutoPageRoutingModule
  ],
  declarations: [CadastroprodutoPage]
})
export class CadastroprodutoPageModule {}
