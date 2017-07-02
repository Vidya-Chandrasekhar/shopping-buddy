import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelSearchItemsPage } from './sel-search-items';

@NgModule({
  declarations: [
    SelSearchItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(SelSearchItemsPage),
  ],
  exports: [
    SelSearchItemsPage
  ]
})
export class SelSearchItemsPageModule {}
