import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DrawerState } from 'ion-bottom-drawer';
import { Observable } from 'rxjs/Observable';

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
  dockedHeight = 400;
  shouldBounce = true;
  distanceTop = 56;
  drawerState: DrawerState;
  nowState = DrawerState.Bottom;

  allEvents = Observable.merge(
    this.navCtrl.viewDidLoad,
    this.navCtrl.viewWillEnter,
    this.navCtrl.viewDidEnter,
    this.navCtrl.viewWillLeave,
    this.navCtrl.viewDidLeave,
    this.navCtrl.viewWillUnload);

  constructor(private navCtrl: NavController, public navParams: NavParams) {

    this.allEvents.subscribe((e) => {
      console.log(e);
    });
  }

  ionViewDidLoad() {
    this.nowState = DrawerState.Docked;
  }

  viewWillEnter() {
    console.log('viewwillenter');
    this.nowState = DrawerState.Docked;
  }

  routeGenerator(event: any) {
  	console.log('ionViewDidLoad RoutePage');
  }
}
