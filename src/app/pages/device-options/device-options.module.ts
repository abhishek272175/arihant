import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceOptionsPageRoutingModule } from './device-options-routing.module';

import { DeviceOptionsPage } from './device-options.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceOptionsPageRoutingModule
  ],
  declarations: [DeviceOptionsPage]
})
export class DeviceOptionsPageModule {}
