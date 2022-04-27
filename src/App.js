import React from 'react';
import Home from './Components/Home/home';
import About from './Components/About/about';
import Contact from './Components/Contact/contact';
import Nav from './Components/Navigation/Nav';
import Product from './Components/Products/product';
import Footer from './Components/Footer/footer';
import './App.css';
import loogo from './images/Harambe2.png';
import {
  BrowserRouter,
  Routes,
  Route, Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav />
    
    
<ul className='nav--list'>
    <li className='nav-item'><Link to='/'><img className='logo' src={loogo} alt='logo' /></Link></li>
    <li className='nav-item'><Link to='/'>HOME</Link></li> 
    <li className='nav-item'><Link to='/about'>ABOUT</Link></li>
    <li className='nav-item'><Link to='/products'>PRODUCTS</Link></li>
    <li className='nav-item'><Link to='/contact'><button className='btn-primary'>CONTACT</button></Link></li>
</ul>




     <Routes>

          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/products" element={<Product />}/>
          <Route exact path="/contact" element={<Contact/>}/>
         
      </Routes>
      <Footer/>
    </BrowserRouter>


    
</div>
    
  );
}

export default App;