import React from 'react';
import './perfume.css';
import {BsFillCartFill} from 'react-icons/bs';

const Perfume = ({perfume, addToCardHandler, reset}) => {
    const {name, pic, price, company, index} =perfume;

    
    
    return (
        <div className='showPerfumeData'>
            <div className='perfume-image-container'>
                 {<img src={pic} alt=''></img>}
            </div>
            <div className='perfume-data-container'>
                { <h2>Name: {name}</h2> }
                {<h2> Price: {price}</h2>}
                {<h2> Brand: {company}</h2>}
            </div>
            
            <div className='addToCard'>
                <button  onClick={ () => addToCardHandler(perfume)}>
                
                    <BsFillCartFill/>
                </button>
                
            </div>
        </div>
        
    );
};

export default Perfume;