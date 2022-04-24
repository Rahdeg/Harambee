import React from 'react';
import { Button } from './Button';
import './Home.css';

const home = () => {
  return (
    <div className='Home-container'>
       <img src="./HotelPic.jpg"/>
       <h1>EVERYTHING YOU NEED</h1>
       <p>Where your problems fade away</p>
       <div className="Home-btns">
          <div className="btn1">
            <Button className = 'btn' buttonStyle='btn--outline' buttonSize='btn--large'>
               GET STARTED
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