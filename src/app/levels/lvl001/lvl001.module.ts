import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LottieAnimationViewModule } from 'ng-lottie';

import { lvl001Page } from './lvl001.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LottieAnimationViewModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: lvl001Page
      }
    ])
  ],
  declarations: [lvl001Page]
})
export class lvl001Module {}
