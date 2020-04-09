import React,{useContext} from 'react'
import {shopContext} from '../../Context/ShopContext'
import {useSpring, animated} from 'react-spring'
import { Link } from 'react-router-dom';

const CartMenu = () => {
    const {Cart,ToggelCart,setTCart,Drop} = useContext(shopContext);
    const slide = useSpring({
        height : ToggelCart ? (window.innerWidth <= 768 ? '820px' : '250px' ) : ('0px'),
        display: ToggelCart ? 'flex' : 'flex',
    });
    return(
        <animated.div className='cartMenu' style={slide}>
            <div className='container'>
            <i onClick={()=>setTCart(!ToggelCart)} className="fas fa-times"></i>
                <div className='row d-flex justify-content-center align-items-center'>
                {Cart.length ? Cart.map((item , i)=>{
                        if(i < 3){
                            return(
                            <div className='col-12 col-md-3 wow fadeInDown' data-wow-delay={`${i*.2}s`} key={item.id} onClick={()=> Drop(item.id)}>
                                <div className='item d-flex justify-content-center align-items-center flex-column'>
                                    <img src={item.Img} width='30%'/>
                                    <h5>{item.Name}</h5>
                                    <span>{item.Price}$</span>
                                    <div className='stars'>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    }) : 
                    (<h6 className='wow fadeIn'>There Is No Item Yet</h6>)
                    }
                    <div className='col-12 col-md-3 d-flex justify-content-center'>
                        <button className='cart-btn' onClick={()=>setTCart(!ToggelCart)} ><Link to='/Cart'>Show Cart</Link></button>
                    </div>
                </div>
            </div>
        </animated.div>
    )
}
export default CartMenu
