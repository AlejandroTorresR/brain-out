import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public levels: any = [
    {name: 'lvl. 1', url: '/lvl001'},
    {name: 'lvl. 2', url: '/lvl002'},
    {name: 'lvl. 3', url: '/lvl003'},
    {name: 'lvl. 4', url: '/lvl004'},
    {name: 'lvl. 5', url: '/lvl005'}
  ];

  constructor() {}

}