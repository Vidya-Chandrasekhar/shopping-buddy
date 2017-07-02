import {Component} from '@angular/core'
import {SelSearchCatPage} from "../sel-search-cat/sel-search-cat";
import {AddItemPage} from "../add-item/add-item";
import {AddStorePage} from "../add-store/add-store";

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
      <ion-tab [root]="selSearchCatPage" tabTitle="Search Item" tabIcon="search"></ion-tab>
      <ion-tab [root]="addItemPage" tabTitle="Add Item" tabIcon="add"></ion-tab>
      <ion-tab [root]="addStorePage" tabTitle="Add Store" tabIcon="home"></ion-tab>
    </ion-tabs>
  `
})

export class TabsPage {
  selSearchCatPage = SelSearchCatPage;
  addItemPage = AddItemPage;
  addStorePage = AddStorePage;
}
