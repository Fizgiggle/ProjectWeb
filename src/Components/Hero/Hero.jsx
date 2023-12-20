import React from 'react'
import './Hero.css'
import background from '../Assets/hero-bg.jpg'

const Hero = () => {
  return (
    <div className='hero' style={{backgroundImage: {background}}}>
      <div className="hero-left">
        <h2>NEVER MISS A THING</h2>
        <div className='sale-alert'>
          <p>sale</p>
          <p>starts</p>
          <p>24.01</p>
        </div>

        <div className="hero-latest-btn">
          <div>Latest collection</div>
        </div>
      </div>
    </div>
  )
}

export default Hero
