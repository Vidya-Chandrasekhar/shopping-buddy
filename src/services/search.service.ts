import {Item} from "../data/item.interface";
import {OnInit} from "@angular/core";
import {ItemSearchResult} from "../data/item.search.result.interface";
import itemsearchresultData from "../data/item1searchresult"
/**
 * Created by harisivaprasad on 7/2/17.
 */

export class SearchService implements  OnInit{

  searchResults: ItemSearchResult[];

  ngOnInit(): void {
    this.searchResults = itemsearchresultData;
  }

  searchForPrice(item: Item){
    return itemsearchresultData;
  }

}
