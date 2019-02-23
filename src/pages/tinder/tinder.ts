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

  info = [
    {name: "Tsim Sha Tsui", content: "Tsim Sha Tsui is one of the most important and bustling districts of Hong Kong. It’s where you can find large shopping malls, a ferry pier, lively and vibrant streets, galleries, and a variety of restaurants. Tourists can spend a busy and culturally stimulating day enjoying what the district has to offer as there’s plenty of scenic spots, here’s our selection of the best.", isElderly: true, isDisability: true},
    {name: "Dragon's Back", content: "The last leg of the Hong Kong Trail, this meandering path on the ridge of Dragon’s Back is widely hailed as one of Hong Kong’s best urban hikes. Besides its attractive name, Dragon’s Back has a sightseeing platform near the peak that provides truly spectacular views of southern Hong Kong Island and its shoreline. Right at the trail’s end is Big Wave Bay.", isElderly: false, isDisability: false},
    {name: "Hong Kong Disneyland", content: "Hong Kong Disneyland is a theme park located on reclaimed land in Penny's Bay, Lantau Island. It is located inside the Hong Kong Disneyland Resort and it is owned and managed by Hong Kong International Theme Parks. It is the largest theme park in Hong Kong, followed by Ocean Park Hong Kong.", isElderly: true, isDisability: true},
    {name: "Big Buddha", content: "The remote Po Lin Monastery, hidden away by lush mountains, became a popular attraction when the extraordinary Tian Tan Buddha statue (informally known as the Big Buddha) was erected in 1993. Sitting 34 metres high and facing north to look over the Chinese people, this majestic bronze Buddha draws pilgrims from all over Asia.", isElderly: true, isDisability: false},
    {name: "Man Mo Temple", content: "he Man Mo Temple Compound on Hollywood Road, Sheung Wan comprising three blocks, namely Man Mo Temple, Lit Shing Kung and Kung Sor, was built approximately between 1847 and 1862 by wealthy Chinese merchants. Man Mo Temple was built mainly for the worship of Man Cheong (God of Literature) and Mo Tai (God of Martial Arts).", isElderly: true, isDisability: true},
    {name: "Wan Chai", content: "Wan Chai is a metropolitan area situated at the western part of the Wan Chai District on the northern shore of Hong Kong Island, in Hong Kong. Its other boundaries are Canal Road to the east, Arsenal Street to the west and Bowen Road to the south. The area north of Gloucester Road is often referred to as Wan Chai North.", isElderly: true, isDisability: true},
    {name: "Ocean Park", content: "Ocean Park Hong Kong, commonly known as Ocean Park, is a marine mammal park, oceanarium, animal theme park and amusement park situated in Wong Chuk Hang and Nam Long Shan in the Southern District of Hong Kong. It is the second largest theme park in Hong Kong.", isElderly: true, isDisability: true},
    {name: "Shek O", content: "Shek O is a beachside village located on the south-eastern part of Hong Kong Island, in Hong Kong. Administratively, it is part of Southern District. The scenery of Shek O is the setting of numerous Cantopop music videos.The Hong Kong director Stephen Chow's famous film 'King of Comedy' was also shot at Shek O.", isElderly: true, isDisability: false},
    {name: "Victoria Peak", content: "Victoria Peak is a hill on the western half of Hong Kong Island. It is also known as Mount Austin.", isElderly: true, isDisability: true},
    {name: "", content: ""},
  ]

  slideOpts = {
    effect: 'flip'
  };

  constructor(
      public sanitizer: DomSanitizer,
      private navCtrl: NavController,
      public events: Events
      ) {
    for (let i = 0; i < this.info.length; i++) {
          this.attendants.push({
              id: i + 1,
              likeEvent: new EventEmitter(),
              destroyEvent: new EventEmitter(),
              img1: `/assets/imgs/tinders/swipe${i+1}.jpg`,
              img2: `/assets/imgs/tinders/swipe${i+1}-1.jpg`,
              img3: `/assets/imgs/tinders/swipe${i+1}-2.jpg`,
              name: this.info[i].name,
              content: this.info[i].content,
              isElderly: this.info[i].isElderly,
              isDisability: this.info[i].isDisability
              // asBg: {'background-image': 'url(' + this.info[i].images + ')'}
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
