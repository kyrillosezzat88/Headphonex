import React , {useContext} from 'react'
import { Link } from 'react-router-dom'
import {shopContext} from '../../Context/ShopContext'
import {useSpring, animated} from 'react-spring'
const Menu = ()=>{
    const List = ['Home' , 'Shop' ,'Cart', 'About' , 'Contact'];
    const {ToggelMenu ,setToggel} = useContext(shopContext);
    const fade = useSpring({
        height: ToggelMenu ? '100%' : '0%',
        display: ToggelMenu ? 'flex' : 'flex',
    });
    return(
        <animated.div className='menu' style={fade}>
            <i onClick={()=>setToggel(!ToggelMenu)} className="fas fa-times"></i>
            <ul className='list-unstyled wow fadeInUp'>
            {List.map((lis , i) => {
                return(
                    <li key={i} onClick={()=>setToggel(!ToggelMenu)}><Link to={'/' + lis} data-text={lis}>{lis}</Link></li>
                )
            })}
            </ul>
        </animated.div>
    )
}
export default Menu