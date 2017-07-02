import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelSearchItemPage } from './sel-search-item';

@NgModule({
  declarations: [
    SelSearchItemPage,
  ],
  imports: [
    IonicPageModule.forChild(SelSearchItemPage),
  ],
  exports: [
    SelSearchItemPage
  ]
})
export class SelSearchItemPageModule {}
