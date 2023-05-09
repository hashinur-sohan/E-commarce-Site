import React, { useEffect } from 'react';
import { useState } from 'react';
import './Shop.css';

import Perfume from '../Perfume/Perfume';

const Shop = () => {
    const [perfumes, setPerfumes]=useState([]);
    const[cartData, setCartData] = useState([]);
    
    useEffect(() =>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data =>setPerfumes(data))  
    },[])

    const addToCardHandler = (perfume) => {
        const newCartData =[...cartData, perfume];
        setCartData(newCartData);
        console.log(newCartData);
    }
    const reset =(cartData) => {
        setCartData([]);
        
    }
    
    return (
        <div className='container'>
            <div className="allProducts"> 
                {
                    perfumes.map(perfume=> <Perfume
                         key={perfume.index} 
                         perfume={perfume} addToCardHandler={addToCardHandler} reset={reset}  
                         />)
                }
            </div>
            <div className='addToCardDetails'>
                <h1 className='card-name-design'>Card</h1>
                <p>Order Summary: {cartData.length}</p>
                <div className="orderSummary">
                    {
                        cartData.map(item => <h3 key={item.index}>{item.name} </h3>
                            
                        )
                    }
                    {
                        <button onClick={() => reset(cartData)}>Choose Again</button>
                    }.
                </div>
            </div>
        </div>
    );
};
export default Shop;