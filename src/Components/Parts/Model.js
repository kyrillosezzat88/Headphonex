import React , {useContext , useEffect} from 'react';
import {Link} from 'react-router-dom'
import { shopContext } from '../../Context/ShopContext';
const Model = ({msg}) => {
    const {Model,setModel} = useContext(shopContext);
    useEffect(()=>{
        Model ? document.querySelector('.model').style.display = 'flex' : document.querySelector('.model').style.display = 'none'
    },[Model])
    return(
        <div className="model">
            <div className="msg wow bounceIn">
                <i class="fas fa-check-circle fa-2x"></i>
                <h2>{msg}</h2>
                <div className="buttons">
                    <button onClick={() => setModel(false)}>Continue</button>
                    <button><Link to='/Cart'>Go To Cart</Link></button>
                </div>
            </div>
        </div>
    )
}
export default Model;