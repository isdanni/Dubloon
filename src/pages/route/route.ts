import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DrawerState } from 'ion-bottom-drawer';

/**
 * Generated class for the RoutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-route',
  templateUrl: 'route.html',
})
export class RoutePage {

  minimumHeight = 0;
  dockedHeight = 150;
  shouldBounce = true;
  distanceTop = 56;
  drawerState: DrawerState;
  nowState = DrawerState.Docked;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoutePage');
  }

}
