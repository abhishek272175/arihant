import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceAdding3Page } from './device-adding3.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceAdding3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceAdding3PageRoutingModule {}
