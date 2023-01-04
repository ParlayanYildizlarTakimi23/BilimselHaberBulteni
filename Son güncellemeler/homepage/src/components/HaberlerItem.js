import React from 'react'

function HaberlerItem({image, name}) {
  return (
    <div className='haberlerItem'>
        <div style={{backgroundImage:`url(${image})` }}></div>
        <h1>{name}</h1>
        <p></p>
      
    </div>
  )
}

export default HaberlerItem
