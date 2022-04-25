import React from 'react'
import abtimg from './london-stock.jpg'

const about = () => {
  return (
    <div className='ab ma3 mt6 mb6'>
    <div className='ab1 ml3 lh-copy'>
    <p className='tc f1'>ABOUT US</p>
    <p>
    Since our modest beginnings in 2005 with a little space in Toronto’s stylish Yorkville locale, ‘Organization Name’ ‘s development has been enlivened with the energy to cook and serve solid, Indian-roused takeout food.

In contrast to other Indian eateries, ‘Organization Name’ was made with the explicit expectation to appear as something else.

We realize numerous individuals love Indian sustenance, yet a large number of them loathe or are unconscious of the regularly unfortunate fixings that make run-of-the-mill Indian nourishment taste so great.

Our menu highlights things that utilization the sound and fragrant flavors, however, forgets the stuffing ghee, spread, oil, and overwhelming cream.

‘Organization Name’ has developed to incorporate four superb takeout areas in Toronto with additional to come sooner rather than later. Our group takes pride in the way that we can furnish our new and faithful clients with extraordinary tasting Indian-roused nourishment that is not normal for that at some other Indian eatery you visit.
    
    </p>
    </div>
    <div className='ab2 ml6'>
    <img src={abtimg} alt='abo'/>
    </div>
    
    
    </div>
  )
}

export default about