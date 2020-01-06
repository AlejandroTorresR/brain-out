import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
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
      if(!localStorage.getItem('progressLv')){
        localStorage.setItem('progressLv', '/lv001')
      }
    });
  }
}
