import { Component } from '@angular/core';
import { AlertService } from '../../providers/alert.service';

@Component({
  selector: 'app-lv002',
  templateUrl: 'lv002.page.html',
  styleUrls: ['lv002.page.scss'],
})
export class lv002Page {
  public params: any = [
    ['8', '9', '10', '11'],
    'Lv. 2',
    '¿Cuantos patos hay?',
    '!Felicidades!',
    'Genial'
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

  clickAnswer(answer){
    if(answer === '9'){
      this.success = answer;
      this.playLottie();
      this.alertService.presentAlert(this.params[3], this.params[4], '/lv002', '/lv003');
    } else {
      this.error = answer;
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