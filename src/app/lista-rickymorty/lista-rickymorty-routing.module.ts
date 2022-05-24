import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaRickymortyPage } from './lista-rickymorty.page';

const routes: Routes = [
  {
    path: '',
    component: ListaRickymortyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaRickymortyPageRoutingModule {}
