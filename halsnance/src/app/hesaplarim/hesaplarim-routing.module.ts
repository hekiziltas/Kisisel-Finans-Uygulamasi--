import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HesaplarimPage } from './hesaplarim.page';

const routes: Routes = [
  {
    path: '',
    component: HesaplarimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HesaplarimPageRoutingModule {}
