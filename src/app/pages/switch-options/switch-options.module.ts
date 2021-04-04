import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwitchOptionsPageRoutingModule } from './switch-options-routing.module';

import { SwitchOptionsPage } from './switch-options.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwitchOptionsPageRoutingModule
  ],
  declarations: [SwitchOptionsPage]
})
export class SwitchOptionsPageModule {}
