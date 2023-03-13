import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HappeningsPage } from './happenings.page';

const routes: Routes = [
  {
    path: '',
    component: HappeningsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HappeningsPageRoutingModule {}
