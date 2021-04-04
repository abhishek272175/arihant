import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceAddingPage } from './device-adding.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceAddingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceAddingPageRoutingModule {}
