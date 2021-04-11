import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllButtonPageRoutingModule } from './all-button-routing.module';

import { AllButtonPage } from './all-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllButtonPageRoutingModule
  ],
  declarations: [AllButtonPage]
})
export class AllButtonPageModule {}
