import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArihantDemoPageRoutingModule } from './arihant-demo-routing.module';

import { ArihantDemoPage } from './arihant-demo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArihantDemoPageRoutingModule
  ],
  declarations: [ArihantDemoPage]
})
export class ArihantDemoPageModule {}
