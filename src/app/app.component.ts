import { Component } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public actions = {
    music: false,
    sound: false,
    vibrate: false
  }
  public appPages = [
    {
      title: 'Bono diario',
      url: '/calendar',
      icon: 'calendar'
    },
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
      title: 'Terminos y condiciones',
      url: '/terms',
      icon: 'clipboard'
    },
    {
      title: 'Poilitica de privacidad',
      url: '/privacy',
      icon: 'copy'
    }
  ];
  constructor(
    public navController: NavController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
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
      localStorage.setItem('date', new Date().toDateString())
      console.log('open modal');
    }
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
}
