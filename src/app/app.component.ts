import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { GlobalParamsProvider } from '../providers/global-params/global-params';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements AfterViewInit {

  ngAfterViewInit(): void {
    this.globalParamsProvider.nav = this.nav;
  }
  rootPage:any = TabsPage;

  @ViewChild('nav') nav: NavController
  
  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private globalParamsProvider: GlobalParamsProvider
    ) 
    {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
