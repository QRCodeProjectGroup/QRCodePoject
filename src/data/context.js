import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const globalContext = createContext();

function GlobalProvider(props){
    const [product,setProduct] = useState([])
    useEffect(async()=>{
        const response = await axios.get('https://enigmatic-temple-42944.herokuapp.com/menu');
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