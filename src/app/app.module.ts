import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
@NgModule({
  declarations: [//模块内部Components/Directives/Pipes的列表，声明一下这个模块内部成员
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [//导入其他module，其它module暴露的出的Components、Directives、Pipes等可以在本module的组件中被使用。
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp,{
          mode:'ios'
    })
  ],
  bootstrap: [IonicApp],//通常是app启动的根组件，一般只有一个component。bootstrap中的组件会自动被放入到entryComponents中。
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
