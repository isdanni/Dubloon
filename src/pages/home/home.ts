import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  @ViewChild(Slides) slides: Slides;
  // @ViewChild('ion-slide') elem: any;

  slideChange(slides) {
    let currentIndex = slides.getActiveIndex();
    // console.log(this.elem.nativeElement);

    if(currentIndex+1 < slides._slides.length){
      // index is in boound
      // this.slides[currentIndex+1].addClass("ng-valid").removeClass("ng-invalid");
    } else {
     // index out of bounds 
     // go back
      // slides.slideTo(slides._slides.length -1);
    }


    // let currentIndex = this.slides.realIndex;
    // let SlideLength = this.slides;
    // this.slides.zoom = true;

    // console.log('Current index is', currentIndex);
    // console.log('Length is', SlideLength);

    // if(currentIndex >= SlideLength) {
    //   // this.slides[currentIndex].addClass("ng-valid").removeClass("ng-invalid");
    // } else {
    //   // this.slides[currentIndex].addClass("ng-invalid").removeClass("ng-valid");
    // }
  }

  // declare
  // public pin_image_gold = "./../../assets/imgs/GoldenPin.png";
  // public pin_image_silver = "./../../assets/imgs/SilverPin.png";
  // public pin_image_bronze = "./../../assets/imgs/BronzePin.png";
  // public pin_image_netural = "./../../assets/imgs/NeutralPin.png";

  // public pin_image1 = this.pin_image_bronze;
  // public pin_image2 = this.pin_image_bronze;
  // public pin_image3 = this.pin_image_bronze;
  // public pin_image4 = this.pin_image_bronze;
  // public pin_image5 = this.pin_image_bronze;
  // public pin_image6 = this.pin_image_bronze;
  // public pin_image7 = this.pin_image_bronze;
  // public pin_image8 = this.pin_image_bronze;
  // public pin_image9 = this.pin_image_silver;
  // public pin_image10 = this.pin_image_silver;
  // public pin_image11 = this.pin_image_silver;
  // public pin_image12 = this.pin_image_silver;
  // public pin_image13 = this.pin_image_gold;
  // public pin_image14 = this.pin_image_gold;
  // public pin_image15 = this.pin_image_gold;

  pinClicked(event) {
    var mainContent = document.getElementsByClassName("content")[0];
    mainContent.classList.add('pin_active');

    var result = document.getElementsByClassName("pin");
    for (var i = 0; i < result.length; i++) {
      result[i].classList.add('pin_inactive');
    }

    let pinelem = event.srcElement;
    pinelem.classList.remove("pin_inactive");
    // console.log(pinelem);

    var pin_menu = document.getElementsByClassName("pin_menu")[0];
    pin_menu.style.visibility='visible'

    // now this part stops the click from propagating
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
  }
  pinReset() {
    var mainContent = document.getElementsByClassName("content")[0];
    mainContent.classList.remove('pin_active');

    var result = document.getElementsByClassName("pin");
    for (var i = 0; i < result.length; i++) {
      result[i].classList.remove('pin_inactive');
    }
  }
}