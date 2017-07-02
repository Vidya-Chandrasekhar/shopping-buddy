import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelSearchCatPage } from './sel-search-cat';

@NgModule({
  declarations: [
    SelSearchCatPage,
  ],
  imports: [
    IonicPageModule.forChild(SelSearchCatPage),
  ],
  exports: [
    SelSearchCatPage
  ]
})
export class SelSearchCatPageModule {}
