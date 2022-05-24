import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrappPage } from './qrapp.page';

const routes: Routes = [
  {
    path: '',
    component: QrappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrappPageRoutingModule {}
