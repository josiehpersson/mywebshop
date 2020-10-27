import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './productPage.css';
import axios from 'axios';


interface IParams {
    id: string;
}

export default function ProductPage() {

    const [productInfo, setProductInfo] = useState(Object);

    let { id } = useParams<IParams>();

    useEffect(() => {
        axios.get(`http://medieinstitutet-wie-products.azurewebsites.net/api/products/${id}`)
        .then(res => {
            console.log(res)
            setProductInfo(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
        return(
            <div key={productInfo.id}>
    <div className="productPage"> 
            <img className="productPageImage" src={productInfo.imageUrl}/>
        <div className="productPageBox"> 
            <h2 className="productPageName">{productInfo.name}</h2>
            <p className="productPageDescription">{productInfo.description}</p>
            <p>Year: {productInfo.year}</p>
            <strong className="productPagePrice">{productInfo.price}kr</strong>
    <button className="purchase-btn"><i className="fas fa-cart-arrow-down"></i> Add to Cart </button>
        </div>
    </div>
    </div>)

}