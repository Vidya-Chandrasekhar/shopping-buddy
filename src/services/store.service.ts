import {Http, RequestOptionsArgs,Headers, Response} from "@angular/http";
import {AuthService} from "./auth";
import {Injectable} from "@angular/core";
import {Store} from "../model/store";

/**
 * Created by vidyachandrasekhar on 7/2/17.
 */
@Injectable()
export class StoreService {

  constructor(private  http: Http, private authService: AuthService) {

  }

  addStore(store: Store){
    var servicetoken = this.authService.getServiceToken();
    var basicOptions: RequestOptionsArgs = {
      headers: new Headers({'authorization': servicetoken}),
    };

    return this.http.post('http://localhost:8100/store',store, basicOptions)
      .map((response: Response) => {
        return response;
      });
  }


}
