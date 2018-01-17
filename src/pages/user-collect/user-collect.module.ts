import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserCollectPage } from './user-collect';

@NgModule({
  declarations: [
    UserCollectPage,
  ],
  imports: [
    IonicPageModule.forChild(UserCollectPage),
  ],
})
export class UserCollectPageModule {}
