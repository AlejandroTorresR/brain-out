import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LottieAnimationViewModule } from 'ng-lottie';

import { lv002Page } from './lv002.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LottieAnimationViewModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: lv002Page
      }
    ])
  ],
  declarations: [lv002Page]
})
export class lv002Module {}
