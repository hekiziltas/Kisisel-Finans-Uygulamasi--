import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HesaplarimPageRoutingModule } from './hesaplarim-routing.module';

import { HesaplarimPage } from './hesaplarim.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HesaplarimPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HesaplarimPage]
})
export class HesaplarimPageModule {}
