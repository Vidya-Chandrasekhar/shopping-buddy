import {Component, OnInit} from '@angular/core';
import { NavParams} from 'ionic-angular';
import {Item} from "../../data/item.interface";
import {SearchService} from "../../services/search.service";
import {ItemSearchResult} from "../../data/item.search.result.interface";


@Component({
  selector: 'page-sel-search-item',
  templateUrl: 'sel-search-item.html',
})
export class SelSearchItemPage implements OnInit {
  item: Item
  searchResults: ItemSearchResult[];

  constructor(private  navParams: NavParams, private searchService:  SearchService) {
  }

  ngOnInit(): void {
    this.item = this.navParams.data.selectedItem;
    this.searchResults = this.searchService.searchForPrice(this.item)
  }


}
