import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './productDetails.css'
const ProductDetails = () => {
    const {productId}=useParams()
    const [product,setProduct]=useState([])

    useEffect(() =>{
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])

 
   const {title,category,image,price,description}=product;
     
    return (
        <div>
            <div className='productDetails'>
            <img   src={image} alt="" />
            <h3 className='mt-5'>{title}</h3>
            <h5>Category: {category}</h5>
            <p>Price : {price}</p>
            <p>{description}</p>

            </div> 
        </div>
    );
};

export default ProductDetails;