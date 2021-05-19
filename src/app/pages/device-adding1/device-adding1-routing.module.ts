import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceAdding1Page } from './device-adding1.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceAdding1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceAdding1PageRoutingModule {}
