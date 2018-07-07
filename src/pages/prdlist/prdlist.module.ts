import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrdlistPage } from './prdlist';

@NgModule({
  declarations: [
    PrdlistPage,
  ],
  imports: [
    IonicPageModule.forChild(PrdlistPage),
  ],
})
export class PrdlistPageModule {}
