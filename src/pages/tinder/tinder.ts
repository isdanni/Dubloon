import { Component, EventEmitter, ViewChild } from '@angular/core';
import { IonicPage, Navbar, Events } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController } from 'ionic-angular/navigation/nav-controller';


/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tinder',
  templateUrl: 'tinder.html',
})
export class TinderPage {

  @ViewChild(Navbar) navBar: Navbar;

  ready = false;
  attendants = [];
  cardDirection = "xy";
  cardOverlay: any = {
      like: {
          backgroundColor: '#28e93b'
      },
      dislike: {
          backgroundColor: '#e92828'
      }
  };
  
  images=["/assets/imgs/swipe1.png", 
      "/assets/imgs/swipe2.png",
      "/assets/imgs/swipe3.png",
      "/assets/imgs/swipe8.png",
      "/assets/imgs/swipe9.png",
      "/assets/imgs/swipe4.png",
      "/assets/imgs/swipe5.png",
      "/assets/imgs/swipe6.png",
      "/assets/imgs/swipe7.png",
      "/assets/imgs/swipefinal.png"
     ]

  constructor(
      public sanitizer: DomSanitizer,
      private navCtrl: NavController,
      public events: Events
      ) {
    for (let i = 0; i < this.images.length; i++) {
          this.attendants.push({
              id: i + 1,
              likeEvent: new EventEmitter(),
              destroyEvent: new EventEmitter(),
              img: this.images[i],
              asBg: {'background-image': 'url(' + this.images[i] + ')'}
              // asBg: sanitizer.bypassSecurityTrustStyle('url('+this.images[i]+')')
          });
      }

      this.ready = true;
  }

  onCardInteract(event) {
    console.log(event);
  }


  ionViewDidLoad() {
    this.navBar.backButtonClick = (e:UIEvent)=>{
     // todo something
     this.navCtrl.pop();
     this.events.publish('page:init');
    }
  }

}
