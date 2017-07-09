import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Item} from "../../model/item";


@Component({
  selector: 'page-add-price',
  templateUrl: 'add-price.html',
})
export class AddPricePage implements OnInit{
  ngOnInit(): void {
    this.item = this.navParams.data;
  }

   item: Item;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



}
