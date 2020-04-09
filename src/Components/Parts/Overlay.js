import React, {useContext , useEffect} from 'react'
import {shopContext} from '../../Context/ShopContext'

const Overlay = () => {
    const {ToggelCart,ToggelSearch } = useContext(shopContext);
    useEffect(()=>{
        ToggelCart ? document.getElementById('overlay').style.display = 'block' : document.getElementById('overlay').style.display = 'none'
    },[ToggelCart]);
    useEffect(()=>{
        ToggelSearch ? document.getElementById('overlay').style.display = 'block' : document.getElementById('overlay').style.display = 'none'
    },[ToggelSearch]);
    return(
        <div id='overlay' className='overlay'></div>
    )
}
export default Overlay;