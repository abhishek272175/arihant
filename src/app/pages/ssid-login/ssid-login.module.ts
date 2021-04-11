import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SsidLoginPageRoutingModule } from './ssid-login-routing.module';

import { SsidLoginPage } from './ssid-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SsidLoginPageRoutingModule
  ],
  declarations: [SsidLoginPage]
})
export class SsidLoginPageModule {}
