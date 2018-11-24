import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { HomePage } from '../home/home';

import { CameraPage } from '../camera/camera';
import { SocialPage } from '../social/social';
import { SettingsPage } from '../settings/settings';
import { SuperTabsController } from 'ionic2-super-tabs';
import { ActionSheetController } from 'ionic-angular';
import { RoutePage } from '../route/route';

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
    private superTabsCtrl: SuperTabsController,
    public actionSheetCtrl: ActionSheetController
  ) {
    this.superTabsCtrl.enableTabsSwipe(false, 'route');
    
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
    if(ev.id === 'route'){
      this.presentActionSheet();
    }
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Route Menu',
      buttons: [
        {
          text: 'Route Creator',
          role: 'routeCreator',
          handler: () => {
            console.log('Route Creator clicked');
          }
        },
        {
          text: 'Community Routes',
          role: 'communityRoutes',
          handler: () => {
            console.log('Community Routes clicked');
          }
        },
        {
          text: 'Famous routes',
          role: 'famousRoutes',
          handler: () => {
            console.log('Famous routes clicked');
          }
        },
        {
          text: 'Quick Planner',
          role: 'quickPlanener',
          handler: () => {
            console.log('Famous routes clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
  }
}
