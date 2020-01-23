import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { GeneralService } from '../../providers/general.service';

@Component({
	selector: 'headertools',
	templateUrl: './headerTools.component.html',
	styleUrls: ['./headerTools.component.scss'],
})
export class headerToolsPage implements OnInit {

  public interactiveKeys: Object;
  public anim: any;

	constructor(
    public generalService: GeneralService,
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

	}

}
