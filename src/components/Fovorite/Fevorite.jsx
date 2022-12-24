import React from 'react';
import "./fevorite.css"
import { BsFillSuitHeartFill,BsSuitHeart } from "react-icons/bs";
import { useState } from 'react';
const Fevorite = () => {
    const [state,setState]=useState(false)
    return (
        <div>
        {state ? <BsFillSuitHeartFill onClick={(()=>{
            setState(!state)
        })} className="product-hit-like" /> :  <BsSuitHeart onClick={(()=>{
            setState(!state)
        })} className="product-fevorite"/>}
            
        </div>
    );
};

export default Fevorite;