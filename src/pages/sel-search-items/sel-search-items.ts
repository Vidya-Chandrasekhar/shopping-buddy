import {Component} from '@angular/core';
import {Item} from "../../data/item.interface";
import {NavController, NavParams} from "ionic-angular";
import {SelSearchItemPage} from "../sel-search-item/sel-search-item";

@Component({
  selector: 'page-sel-search-items',
  templateUrl: 'sel-search-items.html',
})
export class SelSearchItemsPage {

  itemCategory: { category: string, items: Item[] }

  constructor(private  navParams: NavParams, private  navController: NavController) {
  }

  ngOnInit(): void {
    this.itemCategory = this.navParams.data;
  }

  onSelectForSearch(item: Item) {
    this.navController.push(SelSearchItemPage, {selectedItem: item})
  }
}
