import React, {useState, useEffect} from 'react'
import { IProduct } from '../../models/IProduct';
import Product from '../Products/Products';
import "./home.css";
import axios from 'axios';

function Home(){
    const defaultValue: IProduct[] = [] 

    const [products, setProducts] = useState(defaultValue)

    useEffect(() => {
        axios.get('http://medieinstitutet-wie-products.azurewebsites.net/api/products')
        .then(res => {
            setProducts(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])

    return(
        <div className="home">
            <img className="home-img" src="https://images.unsplash.com/photo-1543536448-1e76fc2795bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1324&q=80" alt="color"/>
            <Product product={products}></Product> 
        </div> 
    )
}

export default Home
