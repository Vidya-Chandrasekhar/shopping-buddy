import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {SearchPricePage} from "../pages/search-price/search-price";
import {SelSearchCatPage} from "../pages/sel-search-cat/sel-search-cat";
import {SelSearchItemPage} from "../pages/sel-search-item/sel-search-item";
import {SelSearchItemsPage} from "../pages/sel-search-items/sel-search-items";
import {AddItemPage} from "../pages/add-item/add-item";
import {AddStorePage} from "../pages/add-store/add-store";
import {TabsPage} from "../pages/tabs/tabs";
import {SearchService} from "../services/search.service";

@NgModule({
  declarations: [
    MyApp,
    SearchPricePage,
    SelSearchCatPage,
    SelSearchItemsPage,
    SelSearchItemPage,
    AddItemPage,
    AddStorePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPricePage,
    SelSearchCatPage,
    SelSearchItemsPage,
    SelSearchItemPage,
    AddItemPage,
    AddStorePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SearchService
  ]
})
export class AppModule {}
