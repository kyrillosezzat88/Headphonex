import React , {useContext , useEffect} from 'react'
import {Link} from 'react-router-dom'
import { shopContext } from '../../Context/ShopContext';
const Navbar = ()=>{
    const {ToggelMenu, setToggel ,ToggelCart ,setTCart,ToggelSearch , setTSearch ,WhiteNav,Cart} = useContext(shopContext);
    useEffect(()=>{
        if(WhiteNav){
            document.querySelector('nav').style.background = '#fff';
            document.querySelector('nav').style.borderBottom = '1px solid #eee';
            document.querySelector('nav').style.color = '#000';
            document.querySelector('.select button').style.color = '#000'
            document.querySelector('.select ul').style.background = '#000'
            document.querySelector('.amount').style.background = '#9F7AB0';
            document.querySelector('h6 a').style.color = '#000';
        }else{
            document.querySelector('nav').style.background = '#9F7AB0';
            document.querySelector('nav').style.border = 'none';
            document.querySelector('nav').style.color = '#fff';
            document.querySelector('.select button').style.color = '#fff'
            document.querySelector('.amount').style.background = '#000';
            document.querySelector('h6 a').style.color = '#fff';
        } 
    },[WhiteNav])
    return(
        <nav>
            <div className='container wow fadeIn'>
                <div className='row '>
                    <div className='col-4'><i onClick={ ()=> setToggel(!ToggelMenu)} className="fas fa-bars"></i> Menu</div>
                    <div className='col-4'><h6 className='text-center'><Link to='/'>Headphonx</Link></h6></div>
                    <div className='col-4'>
                        <div className='d-flex justify-content-end align-items-center '>
                            <i onClick={()=>setTSearch(!ToggelSearch)} className="fas fa-search"></i>
                            <div className="shoppingCart"  onClick={()=> setTCart(!ToggelCart)} >
                                <i className="fas fa-shopping-bag"></i>
                                <span className="amount">{Cart.length}</span>
                            </div>
                            <div className='select '>
                                <button>EN</button>
                                <ul className='list-unstyled'>
                                    <Link to='#'><li>EN</li></Link>
                                    <Link to='#'><li>AR</li></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;