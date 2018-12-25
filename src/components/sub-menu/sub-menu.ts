import { Component, AfterViewInit, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalParamsProvider } from '../../providers/global-params/global-params';
import { DrawerState } from 'ion-bottom-drawer';
import { TinderPage } from '../../pages/tinder/tinder';
import { Page } from '../../config/modal';

/**
 * Generated class for the SubMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sub-menu',
  templateUrl: 'sub-menu.html'
})
export class SubMenuComponent  implements AfterViewInit {

  text: string;

  @Input() nav: NavController;
    
  minimumHeight = 0;
  dockedHeight = 300;
  shouldBounce = true;
  distanceTop = 56;
  drawerState: DrawerState;
  nowState = DrawerState.Top;
  
  ngAfterViewInit(): void {
    this.globalParams.nowState = DrawerState.Bottom;
  }
  constructor(
    private globalParams: GlobalParamsProvider
  ) {
    console.log('Hello SubMenuComponent Component');
    this.text = 'Hello World';
  }

  stateChange(state){    
    if(this.nowState === 0){
      this.globalParams.nowState = this.nowState;
    }
  }

  getNowState(){
    this.nowState = DrawerState.Docked;
    return this.globalParams.getNowState();
  }

  quickPlannerPage(){
    
    this.globalParams.nowState = DrawerState.Bottom;
    this.nav.push(TinderPage);
  }

  routeCreator(){
    this.globalParams.nowState = DrawerState.Bottom;
    this.globalParams.navCtrl.select(Page.HomePage);
  }
}
