/**
 * Created by vidyachandrasekhar on 7/3/17.
 */
import firebase from 'firebase'
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {User} from "../model/user";

@Injectable()
export class AuthService {

  constructor(private http : Http){
    this.getServiceToken();
  }

  serviceToken: string;
  user: User;


  signup(email: string, password: string, username: string) {
    this.user = new User(email,username);
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }
  signin(email: string, password: string){
    return firebase.auth().signInWithEmailAndPassword(email,password);
  }
  signout(){
    firebase.auth().signOut()
  }

  getServiceToken(){
    if (!this.serviceToken){
      this.http.post('http://localhost:8100/login',' {"username" :"admin", "password":"password"}')
        .subscribe(
        data => {
          console.log(data);
          this.serviceToken = data.headers.get("authorization");
           return this.serviceToken;
          },
        err => { console.log(err); }
      );
    } else {
      return this.serviceToken;
    }
  }
}
