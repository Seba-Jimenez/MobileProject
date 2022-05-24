import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrappPageRoutingModule } from './qrapp-routing.module';

import { QrappPage } from './qrapp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrappPageRoutingModule
  ],
  declarations: [QrappPage]
})
export class QrappPageModule {}
