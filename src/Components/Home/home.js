import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Home.css';
import Hotel from './HotelPic.jpg';

const home = () => {
  return (
    <div className='Home-container'>
       <img src={Hotel} alt='hotelpic' className='foto' />
      
       <h1 >WELCOME TO HARAMBEE</h1>
       <p>Where your problems fade away</p>
       
       <div className="Home-btns">
          <div className="btn1">
            <Button className = 'btn' buttonStyle='btn--outline' buttonSize='btn--large'>
               <Link to='/Product' >ORDER FOOD</Link> 
            </Button>
         </div>
         <div className="btn1">
            <Button className = 'btn' buttonStyle='btn--primary' buttonSize='btn--large'>
            <Link to='/About' >ABOUT US</Link> 
            </Button> 
         </div>
       </div>
    </div>
  )
}

export default home
