import React from 'react';
import Qr from './Qr.png'
import store from './storehub.png'
const Footer = () => {
    return (
        <div>
            <footer>
            <div className='row row-cols-1 row-cols-sm-2  row-cols-md-3 row-cols-lg-4  g-5 mt-5   bg-dark text-primary'>
            <div>
                <h5>Customer Care</h5>
                <p>Help Center</p>
                <p>How to buy</p>
                <p>Returns & Refunds </p>
                <p>Contact us</p>
                <p>Terms</p>
                
  
               
          </div> 


          <div>
              <h5>Store Hub</h5>
              <p>About Store Hub</p>
              <p>Digital Payments</p>
                <p>Career</p>
                <p>Privacy policy</p>
                <p>Store Hub blog</p>
          </div>

            <div>
            <h5>Earn With Store Hub</h5>
                <p>Store University</p>
                <p>sell on Store Hub</p>
                <img  src={Qr} alt="" />
            </div>


            <div>
                <h4>Store Hub Service</h4>
            <img src={store} alt="" />
            <p className='pt-2'>App Service</p>
            <p>onsite Service</p>
            </div>
            </div>
            </footer>
        </div>
    );
};

export default Footer;