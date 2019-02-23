import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { GlobalParamsProvider } from '../../providers/global-params/global-params';

import { Geolocation } from '@ionic-native/geolocation/ngx';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements AfterViewInit {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  ngAfterViewInit(): void {
    this.globalParams.navCtrl = this.navCtrl.parent;
    console.log(this.navCtrl.parent);

  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private globalParams: GlobalParamsProvider,
    public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }


  loadMap() {
    this.geolocation.getCurrentPosition({ timeout: 15000 }).then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    }, (err) => {
      console.log(err);
    });

  }

  addMarker() {

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);

  }

  addInfoWindow(marker, content) {

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

  @ViewChild(Slides) slides: Slides;

  slideChange(slides) {
    let currentIndex = slides.getActiveIndex();
    // console.log(this.elem.nativeElement);

    if (currentIndex + 1 < slides._slides.length) {
      // index is in boound
      // this.slides[currentIndex+1].addClass("ng-valid").removeClass("ng-invalid");
    } else {
      // index out of bounds 
      // go back
      // slides.slideTo(slides._slides.length -1);
    }
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

    // var offset_top = pinelem.getBoundingClientRect().top;
    // var offset_left = pinelem.getBoundingClientRect().left;
    // console.log("offset_top: "+offset_top);
    // console.log("offset_left: "+offset_left);

    var pin_menu = document.getElementsByClassName("pin_menu")[0];
    pin_menu.classList.remove("pin_menu_inactive");

    var loc_intro = document.getElementsByClassName("loc_intro")[0];
    loc_intro.classList.remove("hide");

    // now this part stops the click from propagating
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
  }

  pin8Clicked(event) {
    var mainContent = document.getElementsByClassName("content")[0];
    mainContent.classList.add('content_pin_active');

    var result = document.getElementsByClassName("pin");
    for (var i = 0; i < result.length; i++) {
      result[i].classList.add('pin_inactive');
    }

    let pinelem = event.srcElement;
    pinelem.classList.remove("pin_inactive");

    var pin_menu = document.getElementsByClassName("pin8_menu")[0];
    pin_menu.classList.remove("pin_menu_inactive");

    var loc_intro = document.getElementsByClassName("loc8_intro")[0];
    loc_intro.classList.remove("hide");

    // now this part stops the click from propagating
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
  }

  pin15Clicked(event) {
    var mainContent = document.getElementsByClassName("content")[0];
    mainContent.classList.add('content_pin_active');

    var result = document.getElementsByClassName("pin");
    for (var i = 0; i < result.length; i++) {
      result[i].classList.add('pin_inactive');
    }

    let pinelem = event.srcElement;
    pinelem.classList.remove("pin_inactive");

    var pin_menu = document.getElementsByClassName("pin15_menu")[0];
    pin_menu.classList.remove("pin_menu_inactive");

    var loc_intro = document.getElementsByClassName("loc15_intro")[0];
    loc_intro.classList.remove("hide");

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

    var pin8_menu = document.getElementsByClassName("pin8_menu")[0];
    pin8_menu.classList.add("pin_menu_inactive");

    var pin15_menu = document.getElementsByClassName("pin15_menu")[0];
    pin15_menu.classList.add("pin_menu_inactive");

    var loc_intro = document.getElementsByClassName("loc_intro")[0];
    loc_intro.classList.add("hide");

    var loc8_intro = document.getElementsByClassName("loc8_intro")[0];
    loc8_intro.classList.add("hide");

    var loc15_intro = document.getElementsByClassName("loc15_intro")[0];
    loc15_intro.classList.add("hide");
  }

  addtoRoute(event) {
    let pinelem = document.querySelectorAll(".pin:not(.pin_inactive)")[0];
    pinelem.classList.add("pin_selected");

    if (document.getElementsByClassName("pin_selected").length > 2) {
      let pathelem = document.getElementsByClassName("newroute")[0];
      pathelem.classList.add("path-animation");
    }

    this.pinReset();

    // now this part stops the click from propagating
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
  }
}