import {Address} from "./address.interface";
/**
 * Created by vidyachandrasekhar on 7/2/17.
 */
export  interface ItemSearchResult {
  price: number,
  storeName: string,
  address: Address,
  distianceFromcurrentLocation: number
}
