import React from 'react';
import { Link } from 'react-router-dom';
import images from './notfound.jpg'
const NotFound = () => {
    return (
        <div>
            <Link to='/home' className='btn btn-success'> Go Back to Home</Link>
            <img src={images} alt="" />
        </div>
    );
};

export default NotFound;