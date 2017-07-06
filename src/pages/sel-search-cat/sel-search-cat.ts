import {Component, OnInit} from '@angular/core';
import {SelSearchItemsPage} from "../sel-search-items/sel-search-items";
import {SearchService} from "../../services/search.service";
import {Category} from "../../data/category.interface";

@Component({
  selector: 'page-sel-search-cat',
  templateUrl: 'sel-search-cat.html',
})
export class SelSearchCatPage implements OnInit {
  categories: Category[];
  selSearchItemsPage = SelSearchItemsPage;

  constructor(private searchService: SearchService) {
  }


  ngOnInit(): void {
    // this.itemCollection = quotes;
    this.searchService.getCategories().subscribe(
      ((data: Category[]) => {
        console.log(data);
        if (data) {
          this.categories = data;
        } else {
          this.categories =[];
        }
      } )
    )

  }
}
