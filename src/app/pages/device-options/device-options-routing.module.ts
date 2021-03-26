import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceOptionsPage } from './device-options.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceOptionsPageRoutingModule {}
