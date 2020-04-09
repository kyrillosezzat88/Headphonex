import React , {useContext, useEffect} from 'react'
import { shopContext } from '../../Context/ShopContext';
import EmptyCart from '../../Images/empty_cart.png'
import RatingStars from '../Parts/RatingStars';
import {Link} from 'react-router-dom'
import Model from '../Parts/Model';
const Cart = () => {
    const {Drop , setWiteNav , Cart , IncQuantity,DecQuantity,TotalCharge} = useContext(shopContext);
    useEffect(() => {
        setWiteNav(true);
    },[])
    return(
        <div className='cart'>
            <div className='container'>
                {Cart.length ? (
                    Cart.map((pro , i) => (
                    <div className="row proRow wow fadeInUp" data-wow-delay={`${ i*.2 }s`}>
                        <div className="col-4">
                            <Link to={'/Product/'+ pro.id}>
                                <div className="product d-flex justify-content-center align-items-center ">
                                    <img src={pro.Img} alt="Product Image" width='30%'  />
                                    <div className="content">
                                        <h1>{pro.Name}</h1>
                                        <p>{pro.Desc}</p>
                                        <RatingStars/>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-2">
                            <div className="price">
                                <h1>Price</h1>
                                <span>${pro.Price}</span>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="qty">
                                <h1>QTY</h1>
                                <div className="counter justify-content-center align-items-center ">
                                    <span><i className="fas fa-minus" onClick={() => DecQuantity(pro.id)} ></i></span>
                                    <span>{pro.Qty}</span>
                                    <span><i className="fas fa-plus" onClick={() => IncQuantity(pro.id)} ></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="total">
                                <h1>Total</h1>
                                <span>${parseInt(pro.Price * pro.Qty)}</span>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="delete">
                                <h1>Delete</h1>
                                <i className="fas fa-times" onClick={() => Drop(pro.id)}  ></i>
                            </div>
                        </div>
                    </div>
                ))
                ) : (
                    <div className="empty-cart d-flex justify-content-center align-items-center flex-column wow fadeIn">
                        <img src={EmptyCart} alt="empty" width='100%'/>
                        <h2>Your Cart Is Empty</h2>
                    </div>
                )}
                {Cart.length ? (
                <div className="row">
                    <div className="col-12 col-md-6 offset-md-6">
                        <div className="checkout d-flex justify-content-between wow fadeIn">
                            <div className='total'>
                                <h3>General Total:</h3>
                                <h1><span>$</span>{TotalCharge}</h1>
                            </div>
                            <button className='hoverButton'>CheckOut</button>
                        </div>
                    </div>
                </div>
                ) : (
                    null
                )}
            </div>
            {/* <Model msg='there is no items ' /> */}
        </div>
    )
}
export default Cart;