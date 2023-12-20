import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>STYLEBAY</p>
        </div>

        <ul className='footer-links'>
            <li>Company</li>
            <li>Production</li>
            <li>Contacts</li>
            <li>About</li>
        </ul>

        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ (Mukhit Bauyrzhan) 2023 - All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer
