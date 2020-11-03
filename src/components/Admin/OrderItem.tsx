import React from 'react';
import './admin.css';
import { IAdminPage } from '../../models/IAdminPage';

interface IAdminPageProps {
  order: IAdminPage[];
}

export default function OrderItem(props: IAdminPageProps) {
  let ordersHTML = props.order.map((order: IAdminPage) => {
    return (
      <div key={order.productId} className="order-container">
        <div className="order">
          <p>
            <b>Created By:</b>
          </p>
          <p>{order.createdBy}</p>
        </div>
        <div className="order">
          <p>
            <b>Order:</b>
          </p>
          <p>{JSON.stringify(order.orderRows)}</p>
        </div>
        <div className="order">
          <p>
            <b>Total Price:</b>
          </p>
          <p>{order.totalPrice}</p>
        </div>
      </div>
    );
  });
  return <div>{ordersHTML}</div>;
}
