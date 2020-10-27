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
            console.log(res)
            setProducts(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])

    return(
        <div className="home">
            <img className="homeImg" src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="color"/>
            <Product product={products}></Product> 
        </div> 
    )
}

export default Home
