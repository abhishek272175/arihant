import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArihantDemoPage } from './arihant-demo.page';

const routes: Routes = [
  {
    path: '',
    component: ArihantDemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArihantDemoPageRoutingModule {}
