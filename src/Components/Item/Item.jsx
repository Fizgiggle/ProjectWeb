import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
        <p className='item-name'>{props.name}</p>
        <p className='item-description'>Lorem ipsum dolor sit amet </p>
        <div className="item-prices">
            ${props.price}
        </div>
    </div>
  )
}

export default Item
