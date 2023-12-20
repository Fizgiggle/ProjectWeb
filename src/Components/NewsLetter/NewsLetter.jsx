import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Stay in touch!</h1>
        <p>Subsribe to our newsletter and get new offers on your email</p>
        <div>
            <input type="email" placeholder='Your Email'/>
            <button>Subscribe</button>
        </div>

    </div>
  )
}

export default NewsLetter