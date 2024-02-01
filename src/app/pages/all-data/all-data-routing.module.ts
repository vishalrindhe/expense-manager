import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllDataPage } from './all-data.page';

const routes: Routes = [
  {
    path: '',
    component: AllDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllDataPageRoutingModule {}
