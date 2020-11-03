import React, {useEffect, useState}from 'react';
import axios from 'axios'
import OrderItem, { IAdminPage } from './OrderItem';

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
    <div>
        <OrderItem order={orders}></OrderItem>
    </div>
    )
}

export default AdminPage