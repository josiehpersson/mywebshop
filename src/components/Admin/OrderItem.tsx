import React from 'react';
import './admin.css';

interface IOrderArray {
  [index: number]: { amount: number, productId: number };
}

export interface IAdminPage {
  createdBy: string;
  totalPrice: number;
  orderRows: IOrderArray;
  productId: number;
}

interface IAdminPageProps {
  order: IAdminPage[];
}

export default function OrderItem(props: IAdminPageProps) {
  let ordersHTML = props.order.map((order: IAdminPage) => {
    return (
      <div key={order.productId} className="order-container">
        <p className="order-user">{order.createdBy}</p>
        <p className="order-product">{order.productId}</p>
        <p>{JSON.stringify(order.orderRows)}</p>
        <p className="order-total">{order.totalPrice}</p>
      </div>
    );
  });
  return <div>{ordersHTML}</div>;
}
