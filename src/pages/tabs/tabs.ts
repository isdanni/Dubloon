import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { RoutePage } from '../route/route';
import { CameraPage } from '../camera/camera';
import { SocialPage } from '../social/social';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RoutePage;
  tab3Root = CameraPage;
  tab4Root = SocialPage;
  tab5Root = SettingsPage;

  constructor() {

  }
}
