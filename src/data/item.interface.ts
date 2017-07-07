import {Category} from "./category.interface";
/**
 * Created by vidyachandrasekhar on 7/1/17.
 */
export  interface Item {
  id: string,
  name: string,
  size: string,
  brand: string
  itemCategory : Category
}
