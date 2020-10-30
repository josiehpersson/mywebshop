import React from 'react';
import './products.css';
import ListItem from '../ListItem/ListItem';
import { IProduct } from '../../models/IProduct';
import { IProductProps } from '../../models/IProductProps';

export default function Product(props: IProductProps) {
  let productsHTML = props.product.map((product: IProduct) => {
    return (
      <ListItem
        key={product.id}
        name={product.name}
        imageUrl={product.imageUrl}
        alt={`${product.name}`}
        price={product.price}
        link={`/products/${product.id}`}
      />
    );
  });

  return <div className="product-list">{productsHTML}</div>;
}
