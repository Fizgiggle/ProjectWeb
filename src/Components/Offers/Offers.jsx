import React from 'react'
import './Offers.css'
import offers_image from '../Assets/offers_pic.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers</h1>
            <p>BEST SELLER PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={offers_image} alt="" />
        </div>
    </div>
  )
}

export default Offers
