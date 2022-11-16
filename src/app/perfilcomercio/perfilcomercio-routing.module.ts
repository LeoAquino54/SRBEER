import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilcomercioPage } from './perfilcomercio.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilcomercioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilcomercioPageRoutingModule {}
