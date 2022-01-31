import React from 'react';
import './Checkout.css'

export default function CheckoutCart(props) {
  return (
    <div className=" price checkout_cart ">
    <div className="price__item price__item--first">
      <span>Cart</span>
      
    </div>
   {props?.cart.map(movie=> <div key={Math.random()} className="price__item row">
      <span className="col-6">{movie?.name || movie?.title}</span>
      <span className="col-6">{movie.price}$</span>
     
    </div>)}
    <div className="price__item row " style={{fontWeight:'bold',color:'white'}}>
      <span className="col-6" >Total Price</span>
      <span className="col-6">{props.totalPrice}$</span>
     
    </div>
   

   
  
  </div>
  );
}
