import React from 'react';
import './Styles/App.css';
import {HashRouter , Route , Switch} from 'react-router-dom'
import Navbar from './Components/Parts/Navbar'
import Home from './Components/Pages/Home'
import ShopContextProvider from './Context/ShopContext';
import Menu from './Components/Parts/Menu';
import CartMenu from './Components/Parts/CartMenu';
import Search from './Components/Parts/Search';
import Product from './Components/Pages/Product'
import Cart from './Components/Pages/Cart'
import Overlay from './Components/Parts/Overlay'
import Shop from './Components/Pages/Shop';
import Contact from './Components/Pages/Contact';
import Page404 from './Components/Pages/Page404'
function App() {
  //for preload Screen
  window.onload = () => {
    document.querySelector('.preloading').style.opacity = 0;
    setTimeout(()=>{
      document.querySelector('.preloading').style.display = 'none';
    },500);
  }
  //for scrollTop Button
  window.onscroll = () => {
    let scrollTop = document.querySelector('.ScrollTop');
    window.pageYOffset > 700 ? scrollTop.style.display = 'block' : scrollTop.style.display = 'none' 
  }
  return (
    <HashRouter basename='/Home' >
      <div className="App">
        <ShopContextProvider>
          <Navbar/>
          <Overlay />
          <Menu/>
          <CartMenu/>
          <Search/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Home' component={Home} />
            <Route path='/Product/:pro_id' component={Product} />
            <Route path='/Cart' component={Cart} />
            <Route path='/Shop' component={Shop} />
            <Route path='/Contact' component={Contact} />
            <Route component={Page404} />
          </Switch>
        </ShopContextProvider>
        {/* Preload Screen */}
        <div className='preloading'>
          <div className="loading">
            <h2>Headphonex</h2>
            <h2>Headphonex</h2>
          </div>
        </div>
        {/* button To scroll page to Top */}
        <button className="ScrollTop wow fadeInUp" onClick={() => window.scrollTo(0,0)}>
          <i className="fas fa-chevron-up"></i>
        </button>
      </div>
    </HashRouter>
  );
}

export default App;
