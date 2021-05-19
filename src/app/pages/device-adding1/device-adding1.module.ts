import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceAdding1PageRoutingModule } from './device-adding1-routing.module';

import { DeviceAdding1Page } from './device-adding1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceAdding1PageRoutingModule
  ],
  declarations: [DeviceAdding1Page]
})
export class DeviceAdding1PageModule {}
