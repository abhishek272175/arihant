import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddingDevicePage } from './adding-device.page';

const routes: Routes = [
  {
    path: '',
    component: AddingDevicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddingDevicePageRoutingModule {}
