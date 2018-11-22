import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { HomePage } from '../home/home';
import { RoutePage } from '../route/route';
import { CameraPage } from '../camera/camera';
import { SocialPage } from '../social/social';
import { SettingsPage } from '../settings/settings';
import { SuperTabsController } from 'ionic2-super-tabs';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage implements AfterViewInit {

  @ViewChild("SuperTabs") superTabs: any;

  tab1Root = HomePage;
  tab2Root = RoutePage;
  tab3Root = CameraPage;
  tab4Root = SocialPage;
  tab5Root = SettingsPage;

  constructor(
    private superTabsCtrl: SuperTabsController
  ) {
    
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

  onTabSelect(ev: any) {
    console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
    this.superTabsCtrl.enableTabsSwipe(true, 'route');
  }
}
