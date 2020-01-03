import { Component } from '@angular/core';
import { AlertService } from '../../providers/alert.service';

@Component({
  selector: 'app-lvl002',
  templateUrl: 'lvl002.page.html',
  styleUrls: ['lvl002.page.scss'],
})
export class lvl002Page {
  public params: any = [
    ['strawberry', 'watermelon', 'apple', 'banana'],
    'Lvl. 2 ',
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

  clickFruit(fruit, index){
    if(fruit === 'watermelon'){
      this.success = fruit;
      this.playLottie();
      this.alertService.presentAlert(this.params[3], this.params[4]);
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