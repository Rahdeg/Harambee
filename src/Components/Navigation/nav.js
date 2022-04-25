import React from 'react'
import {Link} from 'react-router-dom'



const nav = () => {
  return (
    <div>
    
    <nav className="nav bb">
    <ul className="navmenu" >
			
			<li>
				<Link to='/' >HARAMBE</Link>
			</li>
			<li>
			<Link to='/' >HOME</Link>
			</li>
			<li className="is-active">
			<Link to='/about' >ABOUT</Link>
			</li>
			<li>
			<Link to='/contact' >CONTACT</Link>
			</li>
			<li>
			<Link to='/product' >PRODUCTS</Link>
			</li>
			<li>
			<Link to='/product' >ORDER OLINE</Link>
			</li>
			
		</ul>
  </nav>
    
    </div>
  )
}

export default nav