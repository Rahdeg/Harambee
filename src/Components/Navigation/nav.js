import React from 'react';
import { Link } from 'react-router-dom';
import loogo from './Harambe2.png'

const Nav = () => {
  return (
    <nav className='main--nav'>
    <ul className='nav--list'>
    <li className='nav-item'><Link to='/'><img className='logo' src={loogo} alt='logo' /></Link></li>
    <li className='nav-item'><Link to='/'>HOME</Link></li> 
    <li className='nav-item'><Link to='/about'>ABOUT</Link></li>
    <li className='nav-item'><Link to='/product'>PRODUCTS</Link></li>
    <li className='nav-item'><Link to='/contact'><button className='btn-primary'>CONTACT</button></Link></li>
</ul>

    </nav>
  )
}

export default Nav