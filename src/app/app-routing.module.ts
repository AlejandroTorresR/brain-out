import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'lv001', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'terms', loadChildren: './pages/terms/terms.module#termsModule' },
  { path: 'lv001', loadChildren: './levels/lv001/lv001.module#lv001Module' },
  { path: 'lv002', loadChildren: './levels/lv002/lv002.module#lv002Module' },
  { path: 'lv003', loadChildren: './levels/lv003/lv003.module#lv003Module' },
  { path: 'lv004', loadChildren: './levels/lv004/lv004.module#lv004Module' },
  { path: 'lv005', loadChildren: './levels/lv005/lv005.module#lv005Module' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
