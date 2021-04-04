import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwitchOptionsPage } from './switch-options.page';

const routes: Routes = [
  {
    path: '',
    component: SwitchOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwitchOptionsPageRoutingModule {}
