import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { GlobalParamsProvider } from '../providers/global-params/global-params';
import { DrawerState } from 'ion-bottom-drawer';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements AfterViewInit {

  ngAfterViewInit(): void {
  }
  rootPage:any = TabsPage;

  @ViewChild('nav') nav: NavController
  
  minimumHeight = 0;
  dockedHeight = 400;
  shouldBounce = true;
  distanceTop = 56;
  drawerState: DrawerState;
  nowState = DrawerState.Docked;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private globalParamsProvider: GlobalParamsProvider
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  stateChange(state){
    console.log(this.nowState);
    if(this.nowState === 0){
      // this.globalParamsProvider.navCtrl.parent.select(0);
      // this.nav.push(TinderPage);
      this.globalParamsProvider.nowState = this.nowState;
    }
  }

  getNowState(){
    this.nowState = DrawerState.Docked;
    return this.globalParamsProvider.getNowState();
  }
}
