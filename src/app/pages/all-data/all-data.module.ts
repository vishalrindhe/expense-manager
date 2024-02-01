import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllDataPageRoutingModule } from './all-data-routing.module';

import { AllDataPage } from './all-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllDataPageRoutingModule
  ],
  declarations: [AllDataPage],
  exports : [AllDataPage]
})
export class AllDataPageModule {}
