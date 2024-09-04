import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrums = (props) => {

  // error was here , call the exact prop name which is send from when this fucnction called
    // const{product} = props;
    const{product} = props;



  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> 
      {product?.category } <img src={arrow_icon} alt="" /> 
      {product?.name}
    </div>
  );
};

export default Breadcrums;

