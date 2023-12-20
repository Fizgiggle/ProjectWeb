import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/icons/cart.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='navbar'>
        <ul className="nav-menu">
          <li onClick = {() => {setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
          <li onClick = {() => {setMenu("men")}}><Link style={{textDecoration: 'none'}} to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
          <li onClick = {() => {setMenu("women")}}><Link style={{textDecoration: 'none'}} to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
          <li onClick = {() => {setMenu("about")}}><Link style={{textDecoration: 'none'}} to='/about'>About</Link>{menu==="about"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-logo">
            <img src={logo} alt="Logo" />
            <p>STYLEBAY</p>
        </div>

        <div className="nav-login-cart">
          <Link to = '/login'><button>Login</button></Link>
          <Link to = '/cart'><img src={cart} alt="cart" /></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar
