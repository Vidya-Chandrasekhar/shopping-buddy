import {Category} from "./category";
/**
 * Created by vidyachandrasekhar on 7/2/17.
 */
export class Item{
  constructor(public name: string,public qtytype
  : string, public qty: number, public brand : string, public itemCategory : Category  ){}
}
