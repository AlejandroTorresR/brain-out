import { Injectable } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Injectable()
export class AlertService {

  constructor(
    public alertController: AlertController,
    public navController: NavController) { }

  async presentAlert(param1:string, param2:string, param3:string, param4:string) {
    const alert = await this.alertController.create({
      header: param1,
      subHeader: param2,
      buttons: [{
        text: 'Siguiente',
        handler: () => {
          this.navController.navigateRoot( param4 );
          if(!localStorage.getItem(param3)){
            localStorage.setItem(param3, 'true');
            localStorage.setItem('progressLv', param4);
          }
        }
      }],
      backdropDismiss: false
    });
    await alert.present();
  }

}