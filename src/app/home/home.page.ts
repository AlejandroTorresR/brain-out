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

  public interactiveAnimationOption: Object = {
    loop: false,
    prerender: false,
    autoplay: false,
    autoloadSegments: false,
    path: 'assets/lottie/anim-close.json'
  }
  public anim: any;

  constructor(public alertService: AlertService) {}

  clickFruit(fruit){
    if(fruit === 'watermelon'){
      this.alertService.presentAlert(this.params[3], this.params[4]);
    } else { this.playLottie(); }
  }

  playLottie() {
    this.anim.currentRawFrame = 0;
    this.anim.play();
  }

  handleAnimation(anim) {
    this.anim = anim;
  }

}