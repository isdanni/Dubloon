import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { HomePage } from '../home/home';
import { TinderPage } from '../tinder/tinder';
import { SocialPage } from '../social/social';
import { SettingsPage } from '../settings/settings';
import { SuperTabsController } from 'ionic2-super-tabs';
import { ActionSheetController, Events } from 'ionic-angular';
import { RoutePage } from '../route/route';
import { CameraPage } from '../camera/camera';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage implements AfterViewInit {

  tab1Root = HomePage;
  tab2Root = RoutePage;
  tab3Root = CameraPage;
  tab4Root = SocialPage;
  tab5Root = SettingsPage;
  
  constructor(
    private superTabsCtrl: SuperTabsController,
    public actionSheetCtrl: ActionSheetController,
    public events: Events
  ) {
    this.superTabsCtrl.enableTabsSwipe(false, 'route');
  }

  init(){
    this.events.publish('page:init');
  }

  ngAfterViewInit() {
    // must wait for AfterViewInit if you want to modify the tabs instantly
    this.superTabsCtrl.setBadge('social', 5);
  }

  hideToolbar() {
    this.superTabsCtrl.showToolbar(false);
  }

  showToolbar() {
    this.superTabsCtrl.showToolbar(true);
  }
}
