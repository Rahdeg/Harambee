import React from 'react';
import Home from './Components/Home/home';
import About from './Components/About/about';
import Contact from './Components/Contact/contact';
import Nav from './Components/Navigation/nav';
import Product from './Components/Products/product';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
    <Nav/>
    <BrowserRouter>
    <Routes> 
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/product" element={<Product />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
