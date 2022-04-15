import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangaDetailsComponent } from './manga-details/manga-details.component';
import { ShopBodyComponent } from './shop-body/shop-body.component';
import { ShopPannierComponent } from './shop-pannier/shop-pannier.component';

const routes: Routes = [
  { path: '', component: ShopBodyComponent },
  { path: 'pannier', component: ShopPannierComponent },
  { path: ':id', component: MangaDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
