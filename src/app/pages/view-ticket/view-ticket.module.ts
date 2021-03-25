import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewTicketPageRoutingModule } from './view-ticket-routing.module';

import { ViewTicketPage } from './view-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewTicketPageRoutingModule
  ],
  declarations: [ViewTicketPage]
})
export class ViewTicketPageModule {}
