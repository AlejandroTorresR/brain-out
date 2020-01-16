import { Component } from '@angular/core';
import { AlertService } from '../../providers/alert.service';
import { GeneralService } from '../../providers/general.service';

@Component({
  selector: 'app-lv001',
  templateUrl: 'lv001.page.html',
  styleUrls: ['lv001.page.scss'],
})
export class lv001Page {
  public params: any = [
    ['strawberry', 'watermelon', 'apple', 'banana'],
    'Lv. 1',
    'Encuentra el más grande',
    '!Felicidades!',
    '¡Lo encontraste!'
  ]

  public interactiveAnimationOption = {
    loop: false,
    prerender: false,
    autoplay: false,
    autoloadSegments: false,
    path: 'assets/lottie/anim-success.json'
  };

  public anim: any;
  public error: string;
  public success: string;

  constructor(public alertService: AlertService, public generalService: GeneralService) {}

  clickFruit(fruit, index){
    if(fruit === 'watermelon'){
      this.success = fruit;
      this.playLottie();
      this.alertService.presentAlert(this.params[3], this.params[4], '/lv001', '/lv002');
    } else {
      this.error = fruit;
    }
  }

  playLottie() {
    this.anim.currentRawFrame = 0;
    this.anim.play();
  }

  handleAnimation(anim) {
    this.anim = anim;
  }

}