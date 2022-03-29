
import React, { useEffect, useState } from 'react';
import Foodproduct from '../FoodProduct/Foodproduct';
import Checker from '../Checker/Checker';
import CheckerBtn from '../checkerBtn/CheckerBtn';

import './FoodItem.css';

const FoodItem = () => {
   const  [ products, setProducts] = useState([]);
   const [cart, setCart] = useState ([]);
   const [num, setNum] = useState([]);



   useEffect( () =>{
    fetch('products.json')
    .then(res=> res.json())
    .then(data =>setProducts(data))
   },
    []);

    const handlAddToCart =(product) =>{
      const newCart =[...cart, product];
      setCart(newCart);
    }
    const chekerNumber= (product) =>{
        const newNum = [...num, product];
        setNum(newNum);
        // console.log(newNum.length);
    }
  

  return (
    <div className="Food-item">
        <div className="foods">
        {
            products.map( product => <Foodproduct 
              key ={product.id}
              product={product}
              handlAddToCart={handlAddToCart}
              ></Foodproduct>)
        }
        </div>
        <div  className="selection">
            <CheckerBtn></CheckerBtn>
        {
          cart.map( carts =><Checker
            key ={carts.id}
          cart={carts}
          ></Checker>)
        }
           <div> 
         <button  className='checker-btn'>Availablity Checking</button>
         <button className='clean-btn'>Clean</button>
        </div>
       
        </div>
    </div>
  );
}

export default FoodItem;