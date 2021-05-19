import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceAdding2PageRoutingModule } from './device-adding2-routing.module';

import { DeviceAdding2Page } from './device-adding2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceAdding2PageRoutingModule
  ],
  declarations: [DeviceAdding2Page]
})
export class DeviceAdding2PageModule {}
