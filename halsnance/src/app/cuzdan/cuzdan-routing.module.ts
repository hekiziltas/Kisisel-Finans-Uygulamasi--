import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuzdanPage } from './cuzdan.page';

const routes: Routes = [
  {
    path: '',
    component: CuzdanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuzdanPageRoutingModule {}
