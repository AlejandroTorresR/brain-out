import { Component } from '@angular/core';
import { Platform, NavController, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { modalkeyPage } from './components/modalkey/modalkey.component';
import { TranslateConfigService } from './providers/translate-config.service';
 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  isNew = true;
  public selectedLanguage: any;
  public langs: any = ['es', 'en']

  public actions = {
    music: false,
    sound: false,
    vibrate: false
  }
  public appPages = [
    {
      title: 'Tienda',
      url: '/cart',
      icon: 'cart'
    },
    {
      title: 'Calificación',
      url: 'market://details?id=com.zurdo.duelist',
      icon: 'star'
    },
    {
      title: 'Sugerencia',
      url: '/chatboxes',
      icon: 'chatboxes'
    },
    {
      title: 'Compartir',
      url: '/share',
      icon: 'share'
    },
    {
      title: 'Términos y condiciones',
      url: '/terms',
      icon: 'copy'
    }
  ];
  constructor(
    private translateConfigService: TranslateConfigService,
    public modalController: ModalController,
    public navController: NavController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then((pl) => {
      if (pl === 'cordova'){
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      }
      let progressLv = localStorage.getItem('progressLv');
      if(!progressLv){
        localStorage.setItem('progressLv', '/lv001')
      }
      if(progressLv){
        this.navController.navigateRoot( progressLv );
      }
      this.checkNewKey();
    });
  }

  checkNewKey(){
    if(new Date().toDateString() !== localStorage.getItem('date')){
      this.presentModal();
    }
  }

  async presentModal(){
    const modal = await this.modalController.create({
      component: modalkeyPage,
      componentProps: {
        'filters': {}
      },
      backdropDismiss: false
    });
    return await modal.present();
  }


  actionBtn(action){
    switch(action) {
      case 'music':
        this.actions.music = !this.actions.music
        break;
      case 'sound':
        this.actions.sound = !this.actions.sound
        break;
      case 'vibrate':
        this.actions.vibrate = !this.actions.vibrate
        break;
    }
  }

  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }
}
