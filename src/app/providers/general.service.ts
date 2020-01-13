import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable()
export class GeneralService {

  public keys: string = this.getKeys() ? this.getKeys() : '0';

  constructor(public navController: NavController) {
      this.getActualDate()
    }

    getActualDate(){
      console.log(new Date().toDateString())
    }

    getLocalDate(){
      return localStorage.getItem('date')
    }

    getKeys(){
      return localStorage.getItem('keys');
    }

    pushKeys(){
      localStorage.setItem('keys', String(Number(this.keys) + 1))
      this.keys = String(Number(this.keys) + 1)
    }

    removeKeys(){
      if(this.keys !== '0'){
        localStorage.setItem('keys', String(Number(this.keys) - 1))
        this.keys = String(Number(this.keys) - 1)
      }
    }

}