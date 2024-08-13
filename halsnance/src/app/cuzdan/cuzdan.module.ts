import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuzdanPageRoutingModule } from './cuzdan-routing.module';

import { CuzdanPage } from './cuzdan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuzdanPageRoutingModule
  ],
  declarations: [CuzdanPage]
})
export class CuzdanPageModule {}
