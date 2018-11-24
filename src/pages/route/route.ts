import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { DrawerState } from 'ion-bottom-drawer';
import { Events } from 'ionic-angular';
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

  constructor(
    public navParams: NavParams,
    public events: Events
    ) 
    {

      events.subscribe('page:init', () => {
        // user and time are the same arguments passed in `events.publish(user, time)`
        this.ionViewDidLoad();
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
