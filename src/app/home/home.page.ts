import { Component } from '@angular/core';
import { AlertService } from '../providers/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public params: any = [
    ['strawberry', 'watermelon', 'apple', 'banana'],
    'Lvl. 1 ',
    'Encuentra el más grande',
    'Felicidades',
    '¡Lo encontraste!'
  ]

  public lottieError = {
    loop: false,
    prerender: false,
    autoplay: false,
    autoloadSegments: false,
    path: 'assets/lottie/anim-close.json'
  };
  public lottieSuccess = {
    loop: false,
    prerender: false,
    autoplay: false,
    autoloadSegments: false,
    path: 'assets/lottie/anim-ok.json'
  };
  public anim: any;

  constructor(public alertService: AlertService) {}

  clickFruit(fruit, index){
    console.log(fruit, index)
    if(fruit === 'watermelon'){
      console.log('success');
      this.alertService.presentAlert(this.params[3], this.params[4]);
    }
    this.playLottie();
  }

  playLottie() {
    this.anim.currentRawFrame = 0;
    this.anim.play();
  }

  handleAnimation(anim) {
    this.anim = anim;
  }

}