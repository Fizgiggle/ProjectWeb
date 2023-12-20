import React, { useContext } from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/icons/dropdown.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const {clothes} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-9</span> out of 18 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {clothes.map((item, i)=>{
          if(props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore more
      </div>
    </div>
  )
}

export default ShopCategory