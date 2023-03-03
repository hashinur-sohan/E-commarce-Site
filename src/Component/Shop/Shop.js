import React, { useEffect } from 'react';
import { useState } from 'react';
import './Shop.css';

import Perfume from '../Perfume/Perfume';



const Shop = () => {
    const [perfumes, setPerfumes]=useState([]);
    useEffect(() =>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data =>setPerfumes(data))
        
        
    },[])
    

    return (
        <div className='container'>
            <div className="allProducts"> 
                {
                    perfumes.map(perfume=> <Perfume
                         key={perfume.index} 
                         perfume={perfume}
                         ></Perfume>)
                }
                {
                    perfumes.length
                    // <img src='https://www.pexels.com/photo/high-angle-shot-of-animals-on-a-stream-10768835/' alt=''></img>
                    //<img src='https://images.pexels.com/photos/10768835/pexels-photo-10768835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''></img>
                }

            </div>
            <div className="orderSummary">
                summary
            </div>
        </div>
    );
};

export default Shop;