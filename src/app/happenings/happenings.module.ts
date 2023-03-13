import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HappeningsPageRoutingModule } from './happenings-routing.module';

import { HappeningsPage } from './happenings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HappeningsPageRoutingModule
  ],
  declarations: [HappeningsPage]
})
export class HappeningsPageModule {}
