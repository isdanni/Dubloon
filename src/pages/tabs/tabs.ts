import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { SocialPage } from '../social/social';
import { SettingsPage } from '../settings/settings';
import { ActionSheetController, Events } from 'ionic-angular';
import { CameraPage } from '../camera/camera';
import { GlobalParamsProvider } from '../../providers/global-params/global-params';
import { DrawerState } from 'ion-bottom-drawer';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HomePage;
  tab3Root = CameraPage;
  tab4Root = SocialPage;
  tab5Root = SettingsPage;
  
  constructor(
    public actionSheetCtrl: ActionSheetController,
    public globalParamsProvider: GlobalParamsProvider,
    public events: Events) {
  }

  init(){
    this.events.publish('page:init');
    this.globalParamsProvider.nowState = DrawerState.Top;
    console.log(this.globalParamsProvider.nowState);
  }
}
