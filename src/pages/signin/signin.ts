import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth";
import {AlertController, LoadingController} from "ionic-angular";
import {UserService} from "../../services/user.service";
import {User} from "../../model/user";


@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  constructor(private authService: AuthService, private loadingCtrl: LoadingController, private alertCtrl: AlertController, private userService: UserService) {
  }

  onSignin(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Sigining you up...'
    })

    this.authService.signin(form.value.email, form.value.password)
      .then(data => {
        loading.dismiss();
        this.userService.getUser(form.value.email)
          .subscribe( data => {
            this.authService.user = data.value;
          }) ;
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Signin Failed',
          message: error.message,
          buttons: ['Ok']
        })
        alert.present();
      })
    console.log(form);
  }

}
