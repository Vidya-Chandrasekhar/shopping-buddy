import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import categoryData from "../../data/categories";
import {NgForm} from "@angular/forms";
import {AddItemService} from "../../services/addItem.service";
import {Item} from "../../model/item";
import {Category} from "../../model/category";


@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage implements OnInit {
  categories: Category[];

  ngOnInit(): void {
    this.categories = categoryData;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public addItemService: AddItemService) {
  }

  onAddItem(form: NgForm) {

    var category: Category = new Category(form.value.category, null);

    this.addItemService.addItem(new Item(form.value.name, form.value.measureType, form.value.measureQty, form.value.brand, category))
      .subscribe(data => {
        console.log();
      })
    console.log(form);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

}
