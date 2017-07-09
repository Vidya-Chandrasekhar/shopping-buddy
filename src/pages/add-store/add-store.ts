import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {Store} from "../../model/store";
import {StoreService} from "../../services/store.service";
import {SelSearchCatPage} from "../sel-search-cat/sel-search-cat";


@Component({
  selector: 'page-add-store',
  templateUrl: 'add-store.html',
})
export class AddStorePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private  storeService: StoreService,
              private alertCtrl: AlertController) {
  }

  selSearchCatPage = SelSearchCatPage;

  onAddStore(form: NgForm) {


    this.storeService.addStore(
      new Store(form.value.storeName,
        form.value.addressLine1,
        form.value.addressLine2,
        form.value.city,
        form.value.state,
        form.value.zipcode))
      .subscribe(data => {
        console.log();

        let alert = this.alertCtrl.create({
          title: 'Success',
          subTitle: 'Store is added',
          buttons: ['Dismiss']
        });
        alert.present();
      })
    console.log(form);
    form.form.reset();
  }

}
