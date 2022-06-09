import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Product from '../Product/Product';
import './Store.css'

const Store = () => {
  
    const [products,setProducts]=useState([])
   
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products`)
        .then(res =>res.json())
        .then(data => setProducts(data))
    },[])


    return (
        <div>
          
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-3">
            {
              products==false? <div className='spin'><p>Loading.....</p><div className="spinner-border p-4" role="status">
                  
              <span className="visually-hidden">Loading...</span>
             
            </div></div> :  products.map(product => <Product
                    key={product.id}
                    product={product}
                />)
            }
            </div>
          
            
        </div>
    );
};

export default Store;