// import {Item} from "../model/item";
import {Http, RequestOptionsArgs,Headers, Response} from "@angular/http";
import {AuthService} from "./auth";
import {Item} from "../model/item";
import {Injectable} from "@angular/core";

/**
 * Created by vidyachandrasekhar on 7/2/17.
 */
@Injectable()
export class AddItemService {
  // private items: Item[];

  constructor(private  http: Http, private authService: AuthService) {

  }

  addItem(item: Item){
    var servicetoken = this.authService.getServiceToken();
    var basicOptions: RequestOptionsArgs = {
      headers: new Headers({'authorization': servicetoken}),
    };

    return this.http.post('http://localhost:8100/items',item, basicOptions)
      .map((response: Response) => {
        return response.json()
      });
  }


}
