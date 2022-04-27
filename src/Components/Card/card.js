import React from 'react'

const card = ({name,amount,descp,image}) => {
    return (
      <div className='dib br3 pa3 ma2 grow shadow-5'>
     
      
      <article className="br2 ba dark-gray b--black-10  w-100  center">
      <div className="dtc tr">
          <h2 class="f5 mv0 ba br3 red pd2 ma3">{amount} </h2>
        </div>
        <div className=' im'>
        <img src={image} class="" alt=" kitten"/>
        </div>
    
    <div className="pa2 ph3-ns pb3-ns tc">
      <div className="dt w-100 mt1">
        <div className="dtc">
          <h1 className="f5 f4-ns mv0 dark-blue">{name} </h1>
        </div>
        
      </div>
      <p className="f6 lh-copy measure mt2 mid-gray">
        {descp}
      </p>
    </div>
    <div className="tc">
          <button className='f5 link dim ph3 pv2 mb2 dib black bg-orange br2'>BUY</button>
        </div>
  </article>
      
      </div>
    )
  }
export default card