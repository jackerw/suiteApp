import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrdinfoPage } from './prdinfo';

@NgModule({
  declarations: [
    PrdinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(PrdinfoPage),
  ],
  exports:[
  	PrdinfoPage
  ]
})
export class PrdinfoPageModule {}
