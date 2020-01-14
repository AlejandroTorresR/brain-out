import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
	selector: 'app-modalkey',
	templateUrl: './modalkey.component.html',
	styleUrls: ['./modalkey.component.scss'],
})
export class modalkeyPage implements OnInit {

  public interactiveKeys = {
    loop: false,
    prerender: true,
    autoplay: true,
    autoloadSegments: true,
    path: 'assets/lottie/modalkey.json'
  };

	constructor(
		public modalController:ModalController, 
		private navParams: NavParams) {

	}

	ngOnInit() {

	}

	close(){
		this.modalController.dismiss()
	}


}
