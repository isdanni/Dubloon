import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { DrawerState } from 'ion-bottom-drawer';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the GlobalParamsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalParamsProvider {
  navCtrl: NavController;
  nowState: DrawerState;

  constructor() {
    console.log('Hello GlobalParamsProvider Provider');
  }

  getNowState(){
    return this.nowState;
  }

}
