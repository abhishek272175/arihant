import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceAdding3PageRoutingModule } from './device-adding3-routing.module';

import { DeviceAdding3Page } from './device-adding3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceAdding3PageRoutingModule
  ],
  declarations: [DeviceAdding3Page]
})
export class DeviceAdding3PageModule {}
