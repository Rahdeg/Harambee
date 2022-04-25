import React from 'react';
import { Button } from './Button';
import './Home.css';

const home = () => {
  return (
    <div className='Home-container'>
       <img src="./HotelPic.jpg" alt='mm' className='foto'/>
      
       <h1 >WELCOME TO HARAMBEE</h1>
       <p>Where your problems fade away</p>
       
       <div className="Home-btns">
          <div className="btn1">
            <Button className = 'btn' buttonStyle='btn--outline' buttonSize='btn--large'>
               ORDER FOOD
            </Button>
         </div>
         <div className="btn1">
            <Button className = 'btn' buttonStyle='btn--primary' buttonSize='btn--large'>
               VIEW HOTEL
            </Button> 
         </div>
       </div>
    </div>
  )
}

export default home