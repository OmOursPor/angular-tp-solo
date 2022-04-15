import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopHeaderComponent } from './shop-header/shop-header.component';
import { ShopBodyComponent } from './shop-body/shop-body.component';
import { ShopFooterComponent } from './shop-footer/shop-footer.component';
import { MangaDetailsComponent } from './manga-details/manga-details.component';
import { Routes, RouterModule } from '@angular/router';
import { ShopPannierComponent } from './shop-pannier/shop-pannier.component';

const routes: Routes = [
  { path: '/', component: ShopBodyComponent },
  { path: '/:id', component: MangaDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ShopHeaderComponent,
    ShopBodyComponent,
    ShopFooterComponent,
    MangaDetailsComponent,
    ShopPannierComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { 

}
