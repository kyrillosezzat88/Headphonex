import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
    return(
    <div className='Footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-3'>
                    <div className='links wow fadeIn'>
                        <ul className='list-unstyled'>
                            <li>News</li>
                            <li>Catalog</li>
                            <li>Contacts</li>
                        </ul>
                    </div>
                </div>
                <div className='col-12 col-md-3'>
                    <div className='links wow fadeIn' data-wow-delay='.2s'>
                        <ul className='list-unstyled'>
                            <li>About Us</li>
                            <li>Delivery</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </div>
                <div className='col-12 col-md-3'>
                    <div className='Social wow fadeIn' data-wow-delay='.4s'>
                        <h6>Headphonx</h6>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>
                <div className='col-12 col-md-3'>
                    <div className='subscribe wow fadeIn' data-wow-delay='.6s'>
                        <input placeholder='Enter Your Email' type='email' />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyRights wow fadeIn"  data-wow-delay='.8s'>
            Copyright ©2020 All rights reserved | This <br/> template is made by <a target='_blank' href='https://kyrilloss.com'>Kyrillos Ezzat</a>
        </div>
    </div>
    )
}
export default Footer;