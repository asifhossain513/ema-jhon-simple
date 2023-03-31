import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    console.log(cart)
    // const {cart} = props;
    let totalPrice = 0;
    let totalShipping = 0;

    for(const product of cart){
        // console.log(product.price)
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
        
    }
    const totalTax = totalPrice*10/100;
    const grandTotal = totalPrice + totalShipping + totalTax;

    return (
        <div className='cart'>
                <h4>Order Details</h4>
                <p>selected-items: {cart.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping charge:${totalShipping}</p>
                <p>Tax: ${totalTax.toFixed(2)}</p>
                <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;