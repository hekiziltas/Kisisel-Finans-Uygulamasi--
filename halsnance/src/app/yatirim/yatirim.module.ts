import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YatirimPageRoutingModule } from './yatirim-routing.module';

import { YatirimPage } from './yatirim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YatirimPageRoutingModule
  ],
  declarations: [YatirimPage]
})
export class YatirimPageModule {}
