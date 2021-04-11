import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoogleOtpPage } from './google-otp.page';

const routes: Routes = [
  {
    path: '',
    component: GoogleOtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoogleOtpPageRoutingModule {}
