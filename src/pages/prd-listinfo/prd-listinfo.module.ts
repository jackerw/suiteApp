import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrdListinfoPage } from './prd-listinfo';

@NgModule({
  declarations: [
    PrdListinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(PrdListinfoPage),
  ],
})
export class PrdListinfoPageModule {}
