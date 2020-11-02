import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './productPage.css';
import axios from 'axios';

interface IParams {
  id: string;
}

export interface ICart {
  id: number;
  productId: number;
  product: string;
  amount: number;
  orderId: number;
}
export interface IClickProps {
  updateCount(value: ICart): void;
}

export default function ProductPage(props: IClickProps) {
  const [productInfo, setProductInfo] = useState(Object);

  let { id } = useParams<IParams>();

  useEffect(() => {
    axios
      .get(
        `http://medieinstitutet-wie-products.azurewebsites.net/api/products/${id}`
      )
      .then((res) => {
        setProductInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleClick() {
    let product = {
      id: productInfo.id,
      productId: productInfo.id,
      orderId: productInfo.id,
      product: productInfo.name,
      amount: productInfo.price,
    };
    props.updateCount(product);
  }

  return (
    <div className="page-container" key={productInfo.id}>
      <div className="product-page">
        <img className="product-img" src={productInfo.imageUrl} />
        <div className="product-info">
          <h2>{productInfo.name}</h2>
          <p>{productInfo.description}</p>
          <p>Year: {productInfo.year}</p>
          <strong>{productInfo.price}kr</strong>
          <button type="button" className="purchase-btn" onClick={handleClick}>
            <i className="fas fa-cart-arrow-down"></i> Add to Cart{' '}
          </button>
        </div>
      </div>
    </div>
  );
}
