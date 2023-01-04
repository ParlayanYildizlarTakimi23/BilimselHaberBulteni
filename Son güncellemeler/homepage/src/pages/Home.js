import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/ufo.png'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BannerImage})` }}>
      <div className='headerContainer' >
        
        <h1>Düşünün! Çünkü henüz yasaklanmadı.</h1>
        <p>Her şey merakla başlar.</p>
        <Link to="/haberler">
          <button>Okumaya başlayın. </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
