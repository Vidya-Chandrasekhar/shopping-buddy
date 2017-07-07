import {Item} from "../data/item.interface";
import {ItemSearchResult} from "../data/item.search.result.interface";
import itemsearchresultData from "../data/item1searchresult"
import {Http, RequestOptionsArgs, Headers, Response} from "@angular/http";
import {AuthService} from "./auth";
import 'rxjs/add/operator/map';
import {Injectable, OnInit} from "@angular/core";

/**
 * Created by vidyachandrasekhar on 7/2/17.
 */

@Injectable()
export class SearchService implements OnInit {


  searchResults: ItemSearchResult[];

  constructor(private  http: Http, private authService: AuthService) {

  }

  ngOnInit(): void {
    this.searchResults = itemsearchresultData;
  }

  searchForPrice(item: Item) {
    return itemsearchresultData;
  }

  getCategories() {
    var servicetoken = this.authService.getServiceToken();
    var basicOptions: RequestOptionsArgs = {
      headers: new Headers({'authorization': servicetoken}),
    };
    return this.http.get('http://localhost:8100/categories', basicOptions)
      .map((response: Response) => {
       return response.json()
      });
  }

  getItemsInCategory(categoryID: number) {
    var servicetoken = this.authService.getServiceToken();
    var basicOptions: RequestOptionsArgs = {
      headers: new Headers({'authorization': servicetoken}),
    };
    return this.http.get('http://localhost:8100/items/'+ categoryID, basicOptions)
      .map((response: Response) => {
        return response.json()
      });
  }
}
