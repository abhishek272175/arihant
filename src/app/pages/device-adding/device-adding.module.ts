import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceAddingPageRoutingModule } from './device-adding-routing.module';

import { DeviceAddingPage } from './device-adding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceAddingPageRoutingModule
  ],
  declarations: [DeviceAddingPage]
})
export class DeviceAddingPageModule {}
