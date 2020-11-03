import {IOrderArray} from './IOrderArray';

export interface IAdminPage {
    createdBy: string;
    totalPrice: number;
    orderRows: IOrderArray;
    productId: number;
  }