import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { modalkeyPage } from './modalkey.component';
import { LottieAnimationViewModule } from 'ng-lottie';

const routes: Routes = [
  {
    path: '',
    component: modalkeyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LottieAnimationViewModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [modalkeyPage]
})
export class ModalKeyPageModule {}
