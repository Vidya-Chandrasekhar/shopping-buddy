import {Component, OnInit} from '@angular/core';
import {NavParams} from 'ionic-angular';
import {Item} from "../../data/item.interface";
import {SearchService} from "../../services/search.service";
import {AddPricePage} from "../add-price/add-price";


@Component({
  selector: 'page-sel-search-item',
  templateUrl: 'sel-search-item.html',
})
export class SelSearchItemPage implements OnInit {
  addPricePage = AddPricePage;
  item: Item;

  ngOnInit(): void {
    this.item = this.navParams.data;
  }

  items: Item[];

  constructor(private  navParams: NavParams, private searchService: SearchService) {
  }


}
