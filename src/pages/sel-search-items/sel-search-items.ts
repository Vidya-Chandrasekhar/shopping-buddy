import {Component} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {SelSearchItemPage} from "../sel-search-item/sel-search-item";
import {SearchService} from "../../services/search.service";
import {Item} from "../../model/item";

@Component({
  selector: 'page-sel-search-items',
  templateUrl: 'sel-search-items.html',
})
export class SelSearchItemsPage {

  items: Item[];
  category: String;

  constructor(private  navParams: NavParams, private searchService: SearchService) {
  }

  ngOnInit(): void {
    const categoryID = this.navParams.data.id;
    this.category = this.navParams.data.name;
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
