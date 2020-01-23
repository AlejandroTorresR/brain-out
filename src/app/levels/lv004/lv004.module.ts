import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LottieAnimationViewModule } from 'ng-lottie';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { lv004Page } from './lv004.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DragDropModule,
    LottieAnimationViewModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: lv004Page
      }
    ])
  ],
  declarations: [lv004Page]
})
export class lv004Module {}
