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

  selectedAnimation: any = "interactive";
  animations: any;
  public interactiveAnimationOption = {
    loop: false,
    prerender: false,
    autoplay: false,
    autoloadSegments: false,
    path: 'assets/lottie/anim-close.json'
  };
  public bodymovinAnimations = [
    { path: 'assets/lottie/anim-close.json' }
  ];
  public lottieAnimations = [
    { path: 'assets/lottie/anim-ok.json' }
  ];
  public anim: any;

  constructor(public alertService: AlertService) {}

  clickFruit(fruit, index){
    if(fruit === 'watermelon'){
      console.log('success');
      this.animations = this.lottieAnimations;
      this.alertService.presentAlert(this.params[3], this.params[4]);
    } else {
      this.animations = this.bodymovinAnimations;
    }
    this.playLottie();
    console.log(this.interactiveAnimationOption)
  }

  playLottie() {
    this.anim.currentRawFrame = 0;
    this.anim.play();
  }

  handleAnimation(anim) {
    this.anim = anim;
  }

  changeAnimations() {
    switch (this.selectedAnimation) {
      case "lottie":
        this.animations = this.lottieAnimations;
        break;
      case "bodymovin":
        this.animations = this.bodymovinAnimations;
        break;
    }
  }

}