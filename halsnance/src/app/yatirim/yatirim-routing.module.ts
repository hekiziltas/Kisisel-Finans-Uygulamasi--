import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YatirimPage } from './yatirim.page';

const routes: Routes = [
  {
    path: '',
    component: YatirimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YatirimPageRoutingModule {}
