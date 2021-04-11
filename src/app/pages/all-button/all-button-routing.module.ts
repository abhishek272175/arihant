import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllButtonPage } from './all-button.page';

const routes: Routes = [
  {
    path: '',
    component: AllButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllButtonPageRoutingModule {}
