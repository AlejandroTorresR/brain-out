import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public levels: any = [
    {name: 'lv.1', url: '/lv001'},
    {name: 'lv.2', url: '/lv002'},
    {name: 'lv.3', url: '/lv003'},
    {name: 'lv.4', url: '/lv004'},
    {name: 'lv.5', url: '/lv005'}
  ];
  public progressLv: string = localStorage.getItem('progressLv');

  constructor() {}

}