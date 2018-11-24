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
    // console.log('ionViewDidLoad HomePage');
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

  pinClicked(event) {
    var mainContent = document.getElementsByClassName("content")[0];
    mainContent.classList.add('content_pin_active');

    var result = document.getElementsByClassName("pin");
    for (var i = 0; i < result.length; i++) {
      result[i].classList.add('pin_inactive');
    }

    let pinelem = event.srcElement;
    pinelem.classList.remove("pin_inactive");
    // console.log(pinelem);

    var offset_top = pinelem.getBoundingClientRect().top;
    var offset_left = pinelem.getBoundingClientRect().left;

    var pin_menu = document.getElementsByClassName("pin_menu")[0];
    pin_menu.classList.remove("pin_menu_inactive");

    // now this part stops the click from propagating
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
  }

  pinReset() {
    var mainContent = document.getElementsByClassName("content")[0];
    mainContent.classList.remove('content_pin_active');

    var result = document.getElementsByClassName("pin");
    for (var i = 0; i < result.length; i++) {
      result[i].classList.remove('pin_inactive');
    }

    var pin_menu = document.getElementsByClassName("pin_menu")[0];
    pin_menu.classList.add("pin_menu_inactive");
  }

  addtoRoute(event) {
    let pinelem = document.querySelectorAll(".pin:not(.pin_inactive)")[0];
    pinelem.classList.add("pin_selected");
    
    this.pinReset();

    // now this part stops the click from propagating
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
  }
}