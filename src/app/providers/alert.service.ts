import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable()
export class AlertService {

  constructor(public alertController: AlertController) { }

  async presentAlert(param1:string, param2:string, param3?:string) {
    const alert = await this.alertController.create({
      header: param1,
      subHeader: param2,
      message: param3,
      buttons: ['Siguiente']
    });
    await alert.present();
  }

}