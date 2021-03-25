import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetPasswardPage } from './reset-passward.page';

const routes: Routes = [
  {
    path: '',
    component: ResetPasswardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetPasswardPageRoutingModule {}
