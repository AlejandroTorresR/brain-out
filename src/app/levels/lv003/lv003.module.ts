import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LottieAnimationViewModule } from 'ng-lottie';

import { lv003Page } from './lv003.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LottieAnimationViewModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: lv003Page
      }
    ])
  ],
  declarations: [lv003Page]
})
export class lv003Module {}
