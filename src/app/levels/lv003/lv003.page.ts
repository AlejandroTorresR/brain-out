import { Component } from '@angular/core';
import { AlertService } from '../../providers/alert.service';

@Component({
  selector: 'app-lv003',
  templateUrl: 'lv003.page.html',
  styleUrls: ['lv003.page.scss'],
})
export class lv003Page {
  public params: any = [
    ['dog', 'cat', 'lion', 'elephant'],
    'Lv. 3',
    '¿Quién es el más alto?',
    '!Felicidades!',
    '¡Inteligente!'
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

  constructor(public alertService: AlertService) {}

  clickFruit(fruit){
    if(fruit === 'sun'){
      this.success = fruit;
      this.playLottie();
      this.alertService.presentAlert(this.params[3], this.params[4], '/lv003', '/lv004');
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