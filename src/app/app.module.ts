import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { RoutePage } from '../pages/route/route';
import { CameraPage } from '../pages/camera/camera';
import { SocialPage } from '../pages/social/social';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SuperTabsModule } from 'ionic2-super-tabs';
import { IonBottomDrawerModule } from 'ion-bottom-drawer';
import { GlobalParamsProvider } from '../providers/global-params/global-params';

import { SwipeCardsModule } from 'ng2-swipe-cards';

@NgModule({
  declarations: [
    MyApp,
    CameraPage,
    HomePage,
    SocialPage,
    SettingsPage,
    RoutePage,
    TabsPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
    IonBottomDrawerModule,
    SwipeCardsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CameraPage,
    HomePage,
    SocialPage,
    SettingsPage,
    RoutePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalParamsProvider
  ]
})
export class AppModule {}
