import React from 'react'
import Logo from '../assets/astronot.png';
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div>
      <div className='navbar'> 
       
        <div className='leftSide'>
            <img src={Logo} />
        </div>
        <div className='rightSide'>
            <Link to="/">Home</Link>
            <Link to="/haberler">Haberler</Link>
            <Link to="/contact">Iletisim</Link>
            <Link to="/giris">Giris</Link>
        </div>

      </div>
    </div>
  )
}

export default Navbar
