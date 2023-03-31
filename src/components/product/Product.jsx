import React from 'react';
import './Product.css';


const Product = (props) => {
    const { id, img, seller, name, price, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div>
            <div className='product'>
                <img src={props.product.img}  alt="product-img" srcset="" />
                <div className='product-info'>
                    <h6 className='product-name'>{name}</h6>
                    <h3 className='product-price'>Price:$ {price}</h3>

                    <p>Manufacturer: {seller}</p>
                    <p>Ratting: {ratings} start</p>
                </div>
                <button className='cart-btn' onClick={()=> handleAddToCart(props.product)}>Add to cart 
                </button>
            </div>
        </div>
    );
};

export default Product;