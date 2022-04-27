import React from 'react';
import Home from './Components/Home/home';
import About from './Components/About/about';
import Contact from './Components/Contact/contact';
import Nav from './Components/Navigation/nav';
import Product from './Components/Products/product';
import Footer from './Components/Footer/footer';
import './App.css';
import 'tachyons'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav />
     <Routes>

          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/product" element={<Product />}/>
          <Route exact path="/contact" element={<Contact/>}/>
         
      </Routes>
      <Footer/>
    </BrowserRouter>


    
</div>
    
  );
}

export default App;