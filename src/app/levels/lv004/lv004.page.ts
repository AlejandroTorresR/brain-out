import { Component } from '@angular/core';
import { AlertService } from '../../providers/alert.service';

@Component({
  selector: 'app-lv004',
  templateUrl: 'lv004.page.html',
  styleUrls: ['lv004.page.scss'],
})
export class lv004Page {
  public params: any = [
    [0, 1, 2, 3, 4, 5],
    'Lv. 4',
    '¿Puedes encontrar cual es el diferente?',
    '!Felicidades!',
    '¡Eres brillante!'
  ];
  public answer: any = this.getRandomArbitrary(0,5)

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

  constructor(public alertService: AlertService) {}

  getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  clickFruit(fruit){
    console.log(fruit)
    if(fruit === 'watermelon'){
      this.success = fruit;
      this.playLottie();
      this.alertService.presentAlert(this.params[3], this.params[4], '/lv004', '/lv005');
    } else {
      this.error = fruit;
      setTimeout(()=>{
        this.error = '';
      }, 1000)
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