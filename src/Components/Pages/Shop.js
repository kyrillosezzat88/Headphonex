import React , {useContext , useEffect} from 'react'
import RatingStars from '../Parts/RatingStars';
import menu from '../../Images/Icons/menu.png'
import { Link } from 'react-router-dom'
import { shopContext } from '../../Context/ShopContext';
import Footer from '../Parts/Footer';
const Shop = () => {
    const {Item , setWiteNav , FilterProducts , ViewVertical , ViewHorz} = useContext(shopContext);
    //change Navbar Color 
    useEffect(()=>{
        setWiteNav(true);
        //Function To Filter Products
        FilterProducts();
    },[]);
    return(
        <section className="Home">
            {/* Our Product Section */}
            <div className='Products'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='Filter'>
                                <h1 className='wow fadeInUp'>Our <br/> Products</h1>
                                <h6 className='wow fadeInUp'>HeadPhones</h6>
                                <ul className='list-unstyled wow fadeIn' data-wow-delay='.2s' id='headList'>
                                    <li className='active' data-filter='.All'>All</li>
                                    <li data-filter = '.Red'>Red</li>
                                    <li data-filter='.Violet'>Ultra Violet</li>
                                    <li data-filter='.Beats'>Beats</li>
                                    <li data-filter='.Wireless'>Wireless</li>
                                    <li data-filter='.Collberations'>Collberations</li>
                                </ul>
                                {/* <h6>Price</h6>
                                <form className="form">
                                <InputRange
                                    maxValue={rangeValue.max}
                                    minValue={rangeValue.min}
                                    formatLabel={value => `${value} $`}
                                    value={rangeValue}
                                    onChange={value => setRangeValue(value)}
                                    onChangeComplete={value => console.log(value)} />
                                </form> */}
                                <h6 className='wow fadeIn'>Colors</h6>
                                <ul className='colors list-unstyled wow fadeIn'>
                                    <li className='active' data-filter='.Black'><span data-color='black' className='color'></span>Black</li>
                                    <li data-filter='.Red'><span className='color' data-color='Red'></span>Red</li>
                                    <li data-filter='.Violet'><span className='color' data-color='Violet'></span>Violet</li>
                                    <li data-filter='.Green'><span className='color' data-color='Green'></span>Green</li>
                                    <li data-filter='.Yellow'><span className='color' data-color='Yellow'></span>Yellow</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-9'>
                            <div className='Items'>
                                <div className='d-flex justify-content-between align-items-start mb-5'>
                                    <div className='sorts d-flex justify-content-center align-items-start wow fadeIn' data-wow-delay='.2s'>
                                        <span>SORT BY:</span>
                                        <div className='selectBox'>
                                            <span className='PriceFilter'>Price <i className="fas fa-sort-down"></i></span>
                                            <div className='options  '>
                                                <span className='active' data-filter='.Low'>Low Price</span>
                                                <span data-filter = '.Heigh'>Heigh Price</span>
                                                <span data-filter='.Best'>Best Seller</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='view d-flex justify-content-between align-items-center wow fadeIn' data-wow-delay='.2s'>
                                        <i className="fas fa-bars" onClick={ViewVertical}></i>
                                        <img src={menu} width='40%' onClick={ViewHorz} />
                                    </div>
                                </div>
                                <div className='row grid'>
                                    {Item.map((pro , i) => {
                                        if(i < 9 ){
                                            return (
                                            <div className={`col-12 col-md-4 ${pro.Cat} ${pro.Color} wow fadeInUp`} data-wow-delay={`${i*.2}s`} >
                                                <Link to={'/Product/' + pro.id}>
                                                    <div className='product'>
                                                        <div className='img'><img src={pro.Img} /></div>
                                                        <div className='details'>
                                                            <h6>{pro.Name}</h6>
                                                            <p>{pro.Desc}</p>
                                                            <div className='info'>
                                                                <span className='price'>${pro.Price}</span>
                                                                <RatingStars/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div className='loadMore d-flex justify-content-center align-items-center wow fadeInUp ' data-wow-delay ='.8s'>
                                    <i className="fas fa-arrow-left"></i>
                                    <span>1</span>
                                    <span className='active'>2</span>
                                    <span>3</span>
                                    <span>...</span>
                                    <span>11</span>
                                    <span>12</span>
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    )
}
export default Shop;