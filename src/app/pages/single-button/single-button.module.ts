import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleButtonPageRoutingModule } from './single-button-routing.module';

import { SingleButtonPage } from './single-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleButtonPageRoutingModule
  ],
  declarations: [SingleButtonPage]
})
export class SingleButtonPageModule {}
