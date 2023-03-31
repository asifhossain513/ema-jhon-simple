import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    
    const handleAddToCart =(product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    };

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} 
                    product={product}
                    handleAddToCart= {handleAddToCart}
                    ></Product>)
                }
            </div> 
            <div className="cart-container">

                <Cart cart={cart}></Cart>


                {/* <h4>Order Details</h4>
                <p>selected-items:{cart.length}</p>
                <p>Total Price: </p>
                <p>Total Shipping charge:</p>
                <p>Tax: </p>
                <h3>Grand Total: $</h3> */}
            </div>
        
        </div>
    );
};

export default Shop;