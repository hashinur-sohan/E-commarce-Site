import React from 'react';
import './perfume.css';
import {BsFillCartFill} from 'react-icons/bs';

const Perfume = (props) => {
     //console.log(perfume)
     console.log(typeof props.perfume.pic)
    const {name, pic, price, company} =props.perfume;
  //  console.log(typeof perfume.pic)
    
    return (
        <div className='showData'>
            {<img src={pic} alt=''></img>}
            { <h2>Name: {name}</h2> }
            {<h2> Price: {price}</h2>}
            {<h2> Brand: {company}</h2>}
            <div>
                <button>
                    <BsFillCartFill/>
                </button>
            </div>
        </div>
        
    );
};

export default Perfume;