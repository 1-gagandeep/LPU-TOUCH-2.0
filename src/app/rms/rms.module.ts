import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RmsPageRoutingModule } from './rms-routing.module';

import { RmsPage } from './rms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RmsPageRoutingModule
  ],
  declarations: [RmsPage]
})
export class RmsPageModule {}
