import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Item} from "../../data/item.interface";
import quotes from "../../data/items"
import {SelSearchItemsPage} from "../sel-search-items/sel-search-items";
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'page-sel-search-cat',
  templateUrl: 'sel-search-cat.html',
})
export class SelSearchCatPage implements OnInit {
  itemCollection: { category: string, items: Item[] }[];
  selSearchItemsPage = SelSearchItemsPage;

  constructor(private navController: NavController, private searchService: SearchService) {
  }


  ngOnInit(): void {
    this.itemCollection = quotes;
  }
}
