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
  
  images=["/assets/imgs/logo.png", 
      "/assets/imgs/swipe2.png",
      "/assets/imgs/swipe3.png",
      "/assets/imgs/swipe4.png",
      "/assets/imgs/swipe5.png",
      "/assets/imgs/swipe6.png",
      "/assets/imgs/swipe7.png",
      "/assests/imgs/swipe8.png",
      "/assests/imgs/swipe9.png"
     ]
  constructor(public sanitizer: DomSanitizer) {
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
    console.log('ionViewDidLoad CameraPage');
  }

}
