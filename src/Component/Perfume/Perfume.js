import React from 'react';

const Perfume = (props) => {
     console.log(props.perfume)
     console.log(typeof props.perfume.pic)
    const {name, pic, price} =props.perfume;
    
    return (
        <div>
            { <h2>Name: {name}</h2> }
            {<img src={pic} alt=''></img>}
            {<h2> Price: {price}</h2>}
        </div>
    );
};

export default Perfume;