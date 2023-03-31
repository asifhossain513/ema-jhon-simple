import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    // const {cart} = props;
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){

        // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price
        *product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const totalTax = totalPrice*10/100;
    const grandTotal = totalPrice + totalShipping + totalTax;

    return (
        <div className='cart'>
                <h4>Order Details</h4>
                <p>selected-items: {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping charge:${totalShipping}</p>
                <p>Tax: ${totalTax.toFixed(2)}</p>
                <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;