import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public levels: any = [
    {name: 'lv.1', url: '/lv001', solved: false},
    {name: 'lv.2', url: '/lv002', solved: false},
    {name: 'lv.3', url: '/lv003', solved: false},
    {name: 'lv.4', url: '/lv004', solved: false},
    {name: 'lv.5', url: '/lv005', solved: false}
  ];
  public progressLv: string = localStorage.getItem('progressLv');

  constructor() {
    this.checkSolvedLevels();
  }

  checkSolvedLevels(){
    for(let i in this.levels){
      if(localStorage.getItem(this.levels[i].url)){
        this.levels[i].solved = true;
      }
    }
  }

}  