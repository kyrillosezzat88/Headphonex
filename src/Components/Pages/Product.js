import React, {useContext,useEffect, useState} from 'react'
import { shopContext } from '../../Context/ShopContext';
import RatingStars from '../Parts/RatingStars';
import HeadPhone from '../../Images/HeadPhone.png'
import sideOne from '../../Images/slideone.png'
import sideTwo from '../../Images/slideTwo.png'
import sideThree from '../../Images/slideThree.png'
import sideFour from '../../Images/slideFour.png'
import sideFive from '../../Images/slideFive.png'
import Modal from '../Parts/Model'
const Product = (props) => {
    //get All Items From ContextAPI
    const {Item , setWiteNav , AddToCart , Model , setModel} = useContext(shopContext);
    //Get Product id by props
    const ProductID = props.match.params.pro_id;
    // get Selected Product info from Items in ContextAPI and this will use in inter page  
    const ProductInfo = Item.find(pro => pro.id == ProductID);
    //Change Navbar Color to white 
    useEffect(()=>{
        setWiteNav(true);
    },[])
    //function to open select box when click on it and choose color 
    const openSelect = () => {
        let options =document.querySelector('.options');
        options.style.height == '0px' ? options.style.height = '156px' : options.style.height = '0px';
        let color = document.querySelectorAll('.color');
        let selectedColor = document.querySelector('.selected');
        for(let i =0 ; i < color.length ; i++){
            color[i].onclick = function(){
                selectedColor.firstElementChild.setAttribute('data-color' , this.firstElementChild.getAttribute('data-color'))
                selectedColor.innerHTML = this.innerHTML;
            }
        }
    }
    // handel plus button
    const [Qt , setQt] = useState(1);
    const hnadelPlus = () => {
        if(Qt < ProductInfo.Qty){
            setQt(Qt+1);
            document.querySelector('.amountMsg').style.opacity = '0';
        }else{
            document.querySelector('.amountMsg').style.opacity = '1';
        }
    }
    //handel minus button
    const handelMinus = () => {
        if(Qt > 1){setQt(Qt-1);document.querySelector('.amountMsg').style.opacity = '0';}
        else if(ProductInfo.Qty == 0){setQt(0);}else{setQt(1)}
    }
    useEffect(()=>{
        if(ProductInfo.Qty == 0){setQt(0); document.querySelector('.amountMsg').innerHTML = 'out of stock'}
        if(ProductInfo.Qty < Qt) {setQt(ProductInfo.Qty)}
    },[ProductInfo.Qty])
    return(
        <section className="ProductInfo">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="info d-flex justify-content-center flex-column h-100">
                            <h1 className='wow fadeInUp'>{ProductInfo.Name}</h1>
                            <RatingStars />
                            <p className='wow fadeInUp' data-wow-delay='.2s'>{ProductInfo.FullDesc}</p>
                            <div className="details d-flex justify-content-between align-items-start">
                                <div className="quantity wow fadeInUp " data-wow-delay='.4s'>
                                    <span onClick={handelMinus}><i className="fas fa-minus"></i></span>
                                    <input type="text" value={Qt} className='QTY' />
                                    <span onClick = {hnadelPlus}><i className="fas fa-plus"></i></span>
                                </div>
                                <div className="select wow fadeInUp" data-wow-delay='.6s' onClick={openSelect}>
                                    <div className="selected"><span className="dot">Color</span><i class="fas fa-angle-down ml-4 "></i></div>
                                    <div className="options">
                                        <div className="color"> <span className="dot" data-color='White'></span> white </div>
                                        <div className="color"> <span className="dot" data-color='Black'></span> Black </div>
                                        <div className="color"> <span className="dot" data-color='Violet'></span> Violet </div>
                                        <div className="color"> <span className="dot" data-color='Green'></span> Green </div>
                                        <div className="color"> <span className="dot" data-color='Yellow'></span> Yellow </div>
                                    </div>
                                </div>
                            </div>
                            <div className="amountMsg">There is no more from this item</div>
                            <button className={ProductInfo.Qty === 0 ? ' wow fadeInUp hoverButton outButton' : ' wow fadeInUp hoverButton'} data-wow-delay='.8s' onClick={() => {AddToCart(ProductInfo.id , Qt); document.querySelector('.hoverButton').classList.contains('outButton') ? console.log('not items') : setModel(true) }}>Add To Cart</button>
                            <h6 className='wow fadeIn' data-wow-delay='1s'>Get Help, Chat Now</h6>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="slider wow fadeIn" data-wow-delay='1.2s'>
                            <div className="currentSlide d-flex justify-content-center">
                                <img src={HeadPhone} alt="SliderImage" width='75%'/>
                            </div>
                            <div className="otherSlide d-flex justify-content-center align-items-center">
                                <img src={sideOne} alt=""/>
                                <img src={sideTwo} alt=""/>
                                <img src={sideThree} alt=""/>
                                <img src={sideFour} alt=""/>
                                <img src={sideFive} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal msg='Added Successfully'/>
        </section>
    )
}
export default Product;