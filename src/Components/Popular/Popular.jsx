import React from 'react'
import './Popular.css'
import data_product from '../Assets/clothes/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR FOR MEN</h1>
        <hr/>
        <div className="popular-item">
            {data_product.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
            })}
        </div>
    </div>
  )
}

export default Popular