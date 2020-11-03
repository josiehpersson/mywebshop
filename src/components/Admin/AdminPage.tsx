import React, {useEffect, useState}from 'react';
import axios from 'axios'
import OrderItem from './OrderItem';
import {IAdminPage} from '../../models/IAdminPage';

 function AdminPage(){
     const defaultValue: IAdminPage[] =[]

    const [orders, setOrders] = useState(defaultValue);

    useEffect(() => {
        axios.get(`http://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=7996`)
        .then(res => {
            console.log(res)
            setOrders(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])


    return(
    <div className="admin-page-container">
        <OrderItem order={orders}></OrderItem>
    </div>
    )
}

export default AdminPage