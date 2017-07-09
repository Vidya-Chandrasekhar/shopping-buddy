import {Component, OnInit} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {AddItemService} from "../../services/addItem.service";
import {Item} from "../../model/item";
import {Category} from "../../model/category";
import {SearchService} from "../../services/search.service";


@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage implements OnInit {
  categories: Category[];

  ngOnInit(): void {
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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public addItemService: AddItemService,
              private searchService: SearchService,
              private alertCtrl: AlertController) {
  }

  onAddItem(form: NgForm) {

    var category: Category = new Category(form.value.category, null);

    this.addItemService.addItem(new Item(form.value.name, form.value.measureType, form.value.measureQty, form.value.brand, category))
      .subscribe(data => {
        console.log();
        let alert = this.alertCtrl.create({
          title: 'Success',
          subTitle: 'Item is added',
          buttons: ['Dismiss']
        });
        alert.present();
      })
    console.log(form);
    form.form.reset();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

}
