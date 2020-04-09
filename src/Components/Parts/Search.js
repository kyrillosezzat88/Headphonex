import React , {useContext} from 'react'
import { shopContext } from '../../Context/ShopContext';
import {useSpring, animated } from 'react-spring'
const Search = () => {
    const {ToggelSearch , setTSearch} = useContext(shopContext);
    //Animations
    const Slide = useSpring({
        height : ToggelSearch ? '100px' : '0px',
        display: ToggelSearch ? 'flex' : 'flex',
    });
    return(
        <animated.div className='search' style={Slide}>
            <div className='container'>
                <i onClick={()=>setTSearch(!ToggelSearch)} className="fas fa-times"></i>
                <form>
                    <input type='text' placeholder='Search' />
                    <i className="fas fa-search"></i>
                </form>
            </div>
        </animated.div>
    )
}
export default Search;
