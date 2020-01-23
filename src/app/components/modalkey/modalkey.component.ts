import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { GeneralService } from '../../providers/general.service';

@Component({
	selector: 'app-modalkey',
	templateUrl: './modalkey.component.html',
	styleUrls: ['./modalkey.component.scss'],
})
export class modalkeyPage implements OnInit {

  public interactiveKeys: Object;
  public anim: any;

	constructor(
    public generalService: GeneralService,
		public modalController:ModalController, 
		private navParams: NavParams) {
      this.interactiveKeys = {
        loop: false,
        renderer: 'svg',
        autoplay: false,
        autoloadSegments: false,
        path: 'assets/lottie/modalkey.json'
      };
	}

	ngOnInit() {
    setTimeout(()=>{
      this.anim.currentRawFrame = 1;
      this.anim.play();
    }, 0)
	}

  handleAnimation(anim: any) {
        this.anim = anim;
    }

	close(){
		this.modalController.dismiss();
    this.generalService.pushKeys();
    localStorage.setItem('date', new Date().toDateString());
	}


}
