import React , {useContext , useEffect} from 'react'
import { shopContext } from '../../Context/ShopContext';
import Map from '../../Images/map.png'
import Footer from '../Parts/Footer';
const Contact = () => {
    const {setWiteNav} = useContext(shopContext);
    useEffect(()=>{
        setWiteNav(true);
    },[]);
    return(
        <section className="Contact">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="map wow fadeIn">
                            <div className="mapimg"></div>
                            <div className="locations">
                                <p>CAnada</p>
                                <p className='active'>Usa</p>
                                <p>Australia</p>
                                <p>Asia</p>
                                <p>Europe</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="container">
                            <div className="contact-form">
                                <h1 className='wow fadeInUp'>Contact Us</h1>
                                <h5 className='wow fadeInUp' data-wow-delay='.2s'>Visit Us</h5>
                                <p className='wow fadeInUp' data-wow-delay='.2s'>2127 West 6th Street<br/>
                                    Brooklyn, New York<br/>
                                    USA
                                </p>
                                <h5 className='wow fadeInUp' data-wow-delay='.4s'>Email</h5>
                                <p className='wow fadeInUp' data-wow-delay='.4s'>Support@Headphonx.com</p>
                                <h5 className='wow fadeInUp' data-wow-delay='.6s'>Phone</h5>
                                <p className='wow fadeInUp' data-wow-delay='.6s'>+001236456</p>
                                <form>
                                    <div className='group wow fadeInUp' data-wow-delay='.8s'>
                                        <label htmlFor="email">Enter Email</label>
                                        <input type="email" name="email" id="email"/>
                                    </div>
                                    <div className='group wow fadeInUp' data-wow-delay='1s'>
                                        <label htmlFor="phone">Phone</label>
                                        <input type="text" name="phone" id="phone"/>
                                    </div>
                                    <div className="group wow fadeInUp" data-wow-delay='1.2s'>
                                        <label htmlFor="mesg">Message</label>
                                        <textarea name="mesg" id="mesg"></textarea>
                                    </div>
                                    <button className='wow fadeIn' data-wow-delay='1.4s' >Send <i className="fas fa-chevron-right"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
        </section>
    )
}
export default Contact;