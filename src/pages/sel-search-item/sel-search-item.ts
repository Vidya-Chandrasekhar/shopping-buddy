import {Component, OnInit} from '@angular/core';
import {NavParams} from 'ionic-angular';
import {Item} from "../../data/item.interface";
import {SearchService} from "../../services/search.service";
import {ItemSearchResult} from "../../data/item.search.result.interface";


@Component({
  selector: 'page-sel-search-item',
  templateUrl: 'sel-search-item.html',
})
export class SelSearchItemPage implements OnInit {
  items: Item[];

  constructor(private  navParams: NavParams, private searchService: SearchService) {
  }

  ngOnInit(): void {
    const categoryID = this.navParams.data.category.id;
    // this.itemCollection = quotes;
    this.searchService.getItemsInCategory(categoryID).subscribe(
      ((data: Item[]) => {
        console.log(data);
        if (data) {
          this.items = data;
        } else {
          this.items = [];
        }
      } )
    )

  }

}
