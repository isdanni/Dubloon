import { Component } from '@angular/core';
import { IonicPage, Events, NavParams, NavController } from 'ionic-angular';
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
  dockedHeight = 400;
  shouldBounce = true;
  distanceTop = 56;
  drawerState: DrawerState;
  nowState = DrawerState.Bottom;

  constructor(
    public navParams: NavParams,
    public events: Events,
    private navCtrl: NavController
    ) 
    {

      events.subscribe('page:init', () => {
        // user and time are the same arguments passed in `events.publish(user, time)`
        this.ionViewDidLoad();
      });
  }

  navigateToOtherPage(): void {
    this.nowState = DrawerState.Bottom;
    this.navCtrl.parent.select(3);
  }

  ionViewDidLoad() {
    this.nowState = DrawerState.Docked;
  }

  ionViewDidLeave(){
  }

  routeGenerator() {
    this.nowState = DrawerState.Bottom;
    this.navCtrl.parent.select(0);
  }

  stateChange(state){
    console.log(this.nowState);
    if(this.nowState === 0){
      this.navCtrl.parent.select(0);
    }
  }
}
