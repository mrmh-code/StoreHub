import React from 'react';
import { Link } from 'react-router-dom';
import './product.css'
const Product = (props) => {
   
    const {title,image,category,id}=props.product;
    
    return (
        <div>
             <div className="col">
    <div className="card shadow-lg p-3 bg-body rounded">
      <img src={image}  className="card-image" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title.slice(1,20)}</h5>
        <h6>category: {category}</h6>
        <Link to={`/product/${id}`} className='btn btn-danger mt-2'>Product Details</Link>
        
      </div>
    </div>
  </div>
        </div>
    );
};

export default Product;