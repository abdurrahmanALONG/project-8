
import React from 'react';
import './Checker.css';

const Checker = (props) => {
    // console.log(props.cart.name);
    const {name,id, img }=props.cart;
  return (
    <div className="Checker">
       {/* <img src={img} alt=""></img> */}
       <h4><img src={img} alt=""></img> {name}</h4>
    </div>
    
  );
}

export default Checker;