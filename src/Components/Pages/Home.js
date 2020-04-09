import React, {useContext , useEffect} from 'react';
import {Link} from 'react-router-dom'
import HeadPhone from '../../Images/HeadPhone.png'
import HeadPhoneBlack from '../../Images/HeadPhone-Black.png'
import  Beliver from '../../videos/Believer.mp4'
import Whatever from '../../videos/What-ever-it-takes.mp4'
import AnotherLevel from '../../videos/on-another-level.mp4'
import BeliverPos from '../../Images/Beliver.jpg'
import whateverPos from '../../Images/Whatever.jpg'
import anotherPos from '../../Images/anotherLevel.jpg'
import Gold from '../../Images/Gold.png'; 
import Ultra from '../../Images/Ultra.png'
import Red from '../../Images/Red.png'
import RoseGold from '../../Images/ros-gold.png'
import Silver from '../../Images/silver.png'
import menu from '../../Images/Icons/menu.png'
import Services from '../../Images/services.png'
import {shopContext} from '../../Context/ShopContext'
import RatingStars from '../Parts/RatingStars';
import Footer from '../Parts/Footer';
const Home = ()=>{
    //get some data from context api
    const {Item , setWiteNav , FilterProducts , ViewVertical , ViewHorz} = useContext(shopContext);
    //change Navbar Color 
    useEffect(()=>{
        setWiteNav(false)
    });
    //function to get colors section
    useEffect(() => {
        let color = document.getElementsByClassName('color');
        let AvColors = document.querySelector('.AvColors');
        let li = AvColors.getElementsByTagName('li');
        for(let i = 0; i < color.length ; i++){
            color[i].style.background = ''+ color[i].getAttribute('data-color') +'';
        }
        for(let i =0 ; i < li.length ; i++){
            li[i].addEventListener('click' , function(){
                for(let y of li) {y.querySelector('.border').classList.remove('active');}
                this.firstChild.getElementsByClassName('border')[0].classList.add('active');
                document.getElementById('slidImage').setAttribute('src' , `${this.getAttribute('data-pic')}`);
            })
        }
        //Function To Filter Products
        FilterProducts();
    }, []);
    //functions for videos section
    const HandelVideo = () => {
        let playIcon =  document.getElementsByClassName('play')[0];
        let video =  document.getElementsByTagName('video')[0];
        let bar = document.getElementsByClassName('bar')[0];
        let otherVideos = document.getElementsByClassName('otherVideos')[0];
        if(video.paused){
            video.play();
            playIcon.style.opacity = '0';
            otherVideos.style.opacity = '0'
        }else{
            video.pause();
            playIcon.style.opacity ='1';
            otherVideos.style.opacity = '1'
        }
        video.addEventListener('timeupdate' , function(){
            let videoPos = video.currentTime / video.duration;
            bar.style.width = videoPos * 100 + "%";
        });
    }
    //Function to change Video and poster for each video
    const changeVideo = (e) => {
        let video = document.getElementsByClassName('videos')[0].firstChild;
        video.setAttribute('src' ,`${e.target.getAttribute('data-video')}` );
        video.setAttribute('poster' , `${e.target.getAttribute('src')}`)
    }
    return(
        <section className='Home' >
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className='container h-100'>
                <ol className="carousel-indicators wow fadeInUp" data-wow-delay='2s'>
                    <li data-target="#carouselExampleFade" data-slide-to="0" className="active">1</li>
                    <li data-target="#carouselExampleFade" data-slide-to="1">2</li>
                    <li data-target="#carouselExampleFade" data-slide-to="2">3</li>
                </ol>
                    <div className="carousel-inner h-100">
                        <div className='row active h-100'>
                            <div className='col-12 col-md-6'>
                                <div className='info'>
                                    <h6 className='wow fadeInUp'>Technique</h6>
                                    <h1 className='wow fadeInUp' data-wow-delay='.4s'>Got No Strings</h1>
                                    <p className='wow fadeInUp' data-wow-delay='.6s'>Get the most out of your music with an award-winning, emotionally charged Beats listening experience.</p>
                                    <button className='wow fadeInUp' data-wow-delay='.8s'>Show Item</button>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <div className='VideoOne d-flex justify-content-center align-items-center wow fadeIn' data-wow-delay='1s'><i className="fas fa-play-circle"></i></div>
                                        <div className='VideoTwo d-flex justify-content-center align-items-center wow fadeIn' data-wow-delay='1.2s'><i className="fas fa-play-circle"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 d-none d-md-flex justify-content-center align-items-center'>
                                <img src={HeadPhone} width='90%' className='wow fadeIn' data-wow-delay='1.8s' />
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev wow fadeIn" data-wow-delay='2s' href="#carouselExampleFade" role="button" data-slide="prev">
                        <span className="carousel-control" aria-hidden="true"><i className="fas fa-arrow-left d-none d-md-inline-block"></i>Previous</span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next wow fadeIn" data-wow-delay='2s' href="#carouselExampleFade" role="button" data-slide="next">
                        <span className="carousel-control" aria-hidden="true"><span>Next</span><i className="fas fa-arrow-right d-none d-md-inline-block"></i></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            {/* Choose Color Part*/}
            <div className='colors'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <div className='AvColors'>
                                <h6 className='wow fadeInUp'>Featured</h6>
                                <h1 className='wow fadeInUp' data-wow-delay='.2s'>Avalible <br/> Color</h1>
                                <span className='d-flex justify-content-start align-items-center text-uppercase wow fadeInUp' data-wow-delay='.4s'>Full Catalog <i class="ml-1 fas fa-chevron-right"></i></span>
                                <div className='AllColors d-flex justify-content-around align-items-center'>
                                    <ul className='list-unstyled'>
                                        <li className='d-flex  align-items-center wow fadeInLeft' data-pic={HeadPhoneBlack}><div ><span className='color' data-color='#000'></span><span className='border active'></span></div> Gloss Black</li>
                                        <li className='d-flex  align-items-center wow fadeInLeft' data-wow-delay='.2s' data-pic={RoseGold}><div ><span className='color' data-color='#e6c2bd'></span><span className='border'></span></div> Rose Gold</li>
                                        <li className='d-flex  align-items-center wow fadeInLeft' data-wow-delay='.4s' data-pic={Gold}><div ><span className='color' data-color='#e4bf9c'></span><span className='border'></span></div> Gold</li>
                                    </ul>
                                    <ul className='list-unstyled'>
                                        <li className='d-flex  align-items-center wow fadeInRight' data-pic={Silver}><div ><span className='color' data-color='#ababac'></span><span className='border'></span></div>Silver</li>
                                        <li className='d-flex  align-items-center wow fadeInRight' data-wow-delay='.2s' data-pic={Red}><div ><span className='color' data-color='#e63333' ></span><span className='border'></span></div>Red</li>
                                        <li className='d-flex  align-items-center wow fadeInRight' data-wow-delay='.4s' data-pic={Ultra}><div ><span className='color' data-color='#9878cf'></span><span className='border'></span></div> Ultra Violet</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='slider '>
                                <div className='prev wow fadeIn' data-wow-delay='1.2s'><i class="fas fa-arrow-left"></i>Prev</div>
                                <div className='Next wow fadeIn' data-wow-delay='1.2s'>Next <i class="fas fa-arrow-right"></i></div>
                                <div className='images d-flex justify-content-center align-items-center'>
                                    <img id='slidImage' src={HeadPhoneBlack} width='70%' className='wow fadeInDown' data-wow-delay='1s' />
                                </div>
                                <div className='indecators d-flex justify-content-center align-items-center wow fadeInUp' data-wow-delay='1.2s'>
                                    <span data-slide='1'>1</span>
                                    <span className='active' data-slide='2'>2</span>
                                    <span data-slide='3'>3</span>
                                    <span data-slide='4'>4</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Videos Section */}
            <div className='videos'  >
                <video  onClick={HandelVideo} poster={BeliverPos} className='video wow fadeIn' src={Beliver} ></video>
                <i className="fas fa-play-circle play wow fadeIn" ></i>
                <div className='control'><div className='bar'></div></div>
                <div className='otherVideos'>
                    <div className='container'>
                        <div className='video wow fadeInUp' data-wow-delay='.2s'>
                            <img src={BeliverPos} data-video={Beliver} onClick={changeVideo} />
                        </div>
                        <div className='video wow fadeInUp' data-wow-delay='.4s'>
                            <img src={whateverPos}  data-video={Whatever} onClick={changeVideo} />
                        </div>
                        <div className='video wow fadeInUp' data-wow-delay='.6s'>
                            <img src={anotherPos} data-video={AnotherLevel} onClick={changeVideo} />
                        </div>
                        <div className='video wow fadeInUp' data-wow-delay='.8s'>
                            <span>More</span>
                            <i className="fas fa-chevron-right"></i>
                        </div>
                        {/* <div className='video'>
                            <i class="fas fa-volume-up"></i>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* Our Product Section */}
            <div className='Products'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='Filter'>
                                <h1 className='wow fadeInUp'>Our <br/> Products</h1>
                                <h6 className='wow fadeIn'>HeadPhones</h6>
                                <ul className='list-unstyled wow fadeIn' id='headList'>
                                    <li className='active' data-filter='.All'>All</li>
                                    <li data-filter = '.Red'>Red</li>
                                    <li data-filter='.Violet'>Ultra Violet</li>
                                    <li data-filter='.Beats'>Beats</li>
                                    <li data-filter='.Wireless'>Wireless</li>
                                    <li data-filter='.Collberations'>Collberations</li>
                                </ul>
                                {/* <h6 className='wow fadeIn'>Price</h6>
                                <form className="form wow fadeIn">
                                <InputRange
                                    maxValue={500}
                                    minValue={0}
                                    formatLabel={value => `${value} $`}
                                    value={0}
                                    
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
                                    <div className='sorts wow fadeIn d-flex justify-content-center align-items-start'>
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
                                    <div className='view d-flex justify-content-between align-items-center'>
                                        <i className="fas fa-bars" onClick={ViewVertical} ></i>
                                        <img src={menu} width='40%' onClick={ViewHorz} />
                                    </div>
                                </div>
                                <div className='row grid'>
                                    {Item.map((pro , i) => {
                                        if(i < 6 ){
                                            return (
                                        <div className={`col-12 col-md-4 ${pro.Cat} ${pro.Color} wow fadeInUp`} data-wow-delay={`${i*.2}s`} key={pro.id} >
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
                                <div className='loadMore d-flex justify-content-center align-items-center wow fadeInUp'>
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
            {/* Service Section */}
            <div className='Services'>
                <div className='row'>
                    <div className='offset-md-4 col-md-8 d-none d-md-block'>
                        <img src={Services} width='100%' className='wow fadeIn' />
                    </div>
                </div>
                <div className='Warnty wow bounceIn'>
                    <span>Next <i className="fas fa-arrow-right"></i></span>
                    <h6>Resources</h6>
                    <h1>Services AND <br/> Wranty</h1>
                    <p>Shop for genuine Beats by Dr. Dre products at an Apple Online Store, Apple Retail Store, or an authorized retailer.</p>
                    <button>VIEW SERVICE AND WARRANTY <i className="fas fa-chevron-right"></i></button>
                </div>
            </div>
            <Footer/>
        </section>
    )
}
export default Home