import React from 'react'
import {HaberlerList} from '../helpers/HaberlerList.js'
import HaberlerItem from '../components/HaberlerItem.js';
 import '../styles/Haberler.css'

function Haberler() {
  return (
    <div className='haberler'>
        <h1 className='haberlerTitle colour=' ></h1>
        <div className='haberlerList'>
            {HaberlerList.map((haberlerItem, key) => {
            return <HaberlerItem 
              key={key}
              image={haberlerItem.image} 
              name={haberlerItem.name} 
            
            />
        })}</div>
    </div>
  )
}

export default Haberler
