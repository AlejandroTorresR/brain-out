import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public fruits: any = ['strawberry', 'watermelon', 'apple', 'banana'];
  public question: string = 'Encuentra al más grande';
  public level: string = 'Lv. 1';
  constructor(public alertController: AlertController) {}

  clickFruit(fruit){
    if(fruit === 'watermelon'){
      console.log('success', fruit)
    } else { console.log('error', fruit) }
    this.presentAlert(fruit);
  }

  async presentAlert(fruit) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: `This is an alert message ${fruit}`,
      buttons: ['OK']
    });
    await alert.present();
  }

}