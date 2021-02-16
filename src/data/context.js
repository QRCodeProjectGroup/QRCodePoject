import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const globalContext = createContext();
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5pc2FuY2VtIiwiaWF0IjoxNjEzMzI2MTY2fQ.bAi0uH6LK98bLT7eYZK0JHm4EC9XLjYPP4Ytes1o10M'

function GlobalProvider(props){
    const [product,setProduct] = useState([])
    useEffect(async()=>{
        const response = await axios.get(`https://enigmatic-temple-42944.herokuapp.com/api/menu?token=${token}`);
        const data = await response.data
        let products;
        data.map(item=>(products=item))
        setProduct(products)
    },[])
    return(
        <globalContext.Provider value={product}>
            {props.children}
        </globalContext.Provider>
    )
}

export {GlobalProvider,globalContext}