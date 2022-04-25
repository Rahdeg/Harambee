import React from 'react'
import { food } from '../Food/food'
import Card from '../../Card/card'
import './foodlist.css'


const foodlist = () => {

    const foodarray=
        food.map((user,i)=>{

            return <Card name={food[i].name} descp={food[i].descp} id={food[i].id} image={food[i].img} amount={food[i].amount} />;
            
            
        })

  return (
    <div className='cardlist'>

    {foodarray}
    
    </div>
  )
}

export default foodlist