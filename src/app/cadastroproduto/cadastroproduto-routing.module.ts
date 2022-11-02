import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroprodutoPage } from './cadastroproduto.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroprodutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroprodutoPageRoutingModule {}
