import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SsidLoginPage } from './ssid-login.page';

const routes: Routes = [
  {
    path: '',
    component: SsidLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SsidLoginPageRoutingModule {}
