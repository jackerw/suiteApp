import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LikePage } from './like';

@NgModule({
  declarations: [
    LikePage,
  ],
  imports: [
    IonicPageModule.forChild(LikePage),
  ],
})
export class LikePageModule {}
