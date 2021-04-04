import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddingDevicePageRoutingModule } from './adding-device-routing.module';

import { AddingDevicePage } from './adding-device.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddingDevicePageRoutingModule
  ],
  declarations: [AddingDevicePage]
})
export class AddingDevicePageModule {}
