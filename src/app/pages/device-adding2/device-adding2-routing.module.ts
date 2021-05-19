import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceAdding2Page } from './device-adding2.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceAdding2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceAdding2PageRoutingModule {}
