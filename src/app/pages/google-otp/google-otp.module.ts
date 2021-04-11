import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoogleOtpPageRoutingModule } from './google-otp-routing.module';

import { GoogleOtpPage } from './google-otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleOtpPageRoutingModule
  ],
  declarations: [GoogleOtpPage]
})
export class GoogleOtpPageModule {}
