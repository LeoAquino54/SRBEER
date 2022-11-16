import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilcomercioPageRoutingModule } from './perfilcomercio-routing.module';

import { PerfilcomercioPage } from './perfilcomercio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilcomercioPageRoutingModule
  ],
  declarations: [PerfilcomercioPage]
})
export class PerfilcomercioPageModule {}
