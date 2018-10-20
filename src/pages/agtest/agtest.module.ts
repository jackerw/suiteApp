import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgtestPage } from './agtest';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AgtestPage,
  ],
  imports: [
 	ComponentsModule,
    IonicPageModule.forChild(AgtestPage),
  ],
})
export class AgtestPageModule {}
