import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the GlobalParamsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalParamsProvider {
  nav: NavController;
  constructor() {
    console.log('Hello GlobalParamsProvider Provider');
  }

}
