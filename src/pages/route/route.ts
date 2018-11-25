import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { DrawerState } from 'ion-bottom-drawer';
import { Events, NavController } from 'ionic-angular';
import { GlobalParamsProvider } from '../../providers/global-params/global-params';
import { CameraPage } from '../camera/camera';
import { MyApp } from '../../app/app.component';



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
    private globalParamsProvider: GlobalParamsProvider,
    public navCtrl: NavController
    ) 
    {

      events.subscribe('page:init', () => {
        // user and time are the same arguments passed in `events.publish(user, time)`
        this.ionViewDidLoad();
      });
  }

  navigateToOtherPage(): void {
    this.navCtrl.push(CameraPage);
  }

  ionViewDidLoad() {
    this.nowState = DrawerState.Docked;
  }

  ionViewDidLeave(){
    this.nowState = DrawerState.Bottom;
  }

  viewWillEnter() {
    console.log('viewwillenter');
    this.nowState = DrawerState.Docked;
  }

  routeGenerator(event: any) {
  	console.log('ionViewDidLoad RoutePage');
  }

  stateChange(state){
    console.log(this.nowState);
    if(this.nowState === 0){
      this.globalParamsProvider.nav.push(MyApp);
    }
  }
}
