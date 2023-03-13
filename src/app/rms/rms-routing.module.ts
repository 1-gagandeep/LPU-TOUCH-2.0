import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RmsPage } from './rms.page';

const routes: Routes = [
  {
    path: '',
    component: RmsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RmsPageRoutingModule {}
