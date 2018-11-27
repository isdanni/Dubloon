import { Injectable } from '@angular/core';
import { DrawerState } from 'ion-bottom-drawer';

/*
  Generated class for the GlobalParamsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalParamsProvider {
  navCtrl: any;
  nowState: DrawerState;

  constructor() {
    console.log('Hello GlobalParamsProvider Provider');
  }

  getNowState(){
    return this.nowState;
  }

}
