import {Http, RequestOptionsArgs, Headers, Response} from "@angular/http";
import {AuthService} from "./auth";
import {Injectable} from "@angular/core";
import {User} from "../model/user";

/**
 * Created by vidyachandrasekhar on 7/2/17.
 */
@Injectable()
export class UserService {
  // private items: Item[];

  constructor(private  http: Http, private authService: AuthService) {

  }

  addUser(user: User) {
    var servicetoken = this.authService.getServiceToken();
    var basicOptions: RequestOptionsArgs = {
      headers: new Headers({'authorization': servicetoken}),
    };

    return this.http.post('http://localhost:8100/items', user, basicOptions)
      .map((response: Response) => {
        return response.json()
      });
  }

  getUser(email: String) {
    var servicetoken = this.authService.getServiceToken();
    var basicOptions: RequestOptionsArgs = {
      headers: new Headers({'authorization': servicetoken}),
    };

    return this.http.get('http://localhost:8100/user/email/' + email, basicOptions)
      .map((response: Response) => {
        return response.json()
      });
  }


}
