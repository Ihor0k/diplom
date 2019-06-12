import {MaterialOrder} from './material-order';

export class OrderDetails {
  id: number;
  sheets: number;
  materials: MaterialOrder[];
  price: number;
}
