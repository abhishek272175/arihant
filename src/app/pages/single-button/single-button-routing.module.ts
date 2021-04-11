import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleButtonPage } from './single-button.page';

const routes: Routes = [
  {
    path: '',
    component: SingleButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleButtonPageRoutingModule {}
