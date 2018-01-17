import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrdListPage } from './prd-list';

@NgModule({
  declarations: [
    PrdListPage,
  ],
  imports: [
    IonicPageModule.forChild(PrdListPage),
  ],
})
export class PrdListPageModule {}
