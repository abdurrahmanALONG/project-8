
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Foodproduct.css';

const Foodproduct  = (props) => {
    const {name, img, price, ratings}=props.product;
  

  return (
    <div className="Food-product">
       <img src={img} alt=""></img>
       <h3>Name: {name}</h3>
       <h4>Price: {price}  TK</h4>
       <h5>Ratings: {ratings}</h5>
       <p><small>***Free:plan rice/plan khicuri</small></p>
       <button onClick={()=>props.handlAddToCart(props.product)} className='btn'>Select <FontAwesomeIcon icon={faShoppingCart} /></button>
    </div>
  );
}

export default Foodproduct ;