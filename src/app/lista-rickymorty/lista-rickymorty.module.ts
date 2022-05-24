import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaRickymortyPageRoutingModule } from './lista-rickymorty-routing.module';

import { ListaRickymortyPage } from './lista-rickymorty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaRickymortyPageRoutingModule
  ],
  declarations: [ListaRickymortyPage]
})
export class ListaRickymortyPageModule {}
