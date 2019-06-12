import {OrderDetails} from './order-details';

export class Order {
  id: number;
  name: string;
  author: string;
  copies: number;
  manuscriptSheets: number;
  subject: string;
  details: OrderDetails;
  status: string;
}
