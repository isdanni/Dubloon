import { Component, EventEmitter } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';


/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
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

  images=["./../src/assests/imgs/logo.png", 
      "./../../assests/imgs/swipe2.png",
      "./../../assests/imgs/swipe3.png",
      "./../../assests/imgs/swipe4.png",
      "./../../assests/imgs/swipe5.png",
      "./../../assests/imgs/swipe6.png",
      "./../../assests/imgs/swipe7.png",
      "./../../assests/imgs/swipe8.png",
      "./../../assests/imgs/swipe9.png"
     ]

  constructor(public sanitizer: DomSanitizer) {
    for (let i = 0; i < this.images.length; i++) {
          this.attendants.push({
              id: i + 1,
              likeEvent: new EventEmitter(),
              destroyEvent: new EventEmitter(),
              asBg: sanitizer.bypassSecurityTrustStyle('url('+this.images[i]+')')
          });
      }

      this.ready = true;
  }

  onCardInteract(event) {
    console.log(event);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

}
