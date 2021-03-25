import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetPasswardPageRoutingModule } from './reset-passward-routing.module';

import { ResetPasswardPage } from './reset-passward.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetPasswardPageRoutingModule
  ],
  declarations: [ResetPasswardPage]
})
export class ResetPasswardPageModule {}
