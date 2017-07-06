import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TabsPage} from "../pages/tabs/tabs";
import {SigninPage} from "../pages/signin/signin";
import {SignupPage} from "../pages/signup/signup";
import firebase from 'firebase';
import {AuthService} from "../services/auth";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;
  signinPage = SigninPage;
  signupPage = SignupPage;
  isAutheticated = false;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController, private authService: AuthService) {
    firebase.initializeApp({
      apiKey: "AIzaSyCy6hLY2Q2IWAD2AC5a3GE1rTzWmRNXo6U",
      authDomain: "shopping-buddy-e7f29.firebaseapp.com",
    })
    firebase.auth().onAuthStateChanged(user=>{
      if (user){
        this.isAutheticated =true;
        this.rootPage = TabsPage;
      } else{
        this.isAutheticated = false;
        this.rootPage = SigninPage;
      }
    })
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onLoad(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onLogout(){
  this.authService.signout();
  this.menuCtrl.close();
  this.nav.setRoot(SigninPage)
  }
}

