import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
	selector: 'app-modalkey',
	templateUrl: './modalkey.component.html',
	styleUrls: ['./modalkey.component.scss'],
})
export class modalkeyPage implements OnInit {

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
