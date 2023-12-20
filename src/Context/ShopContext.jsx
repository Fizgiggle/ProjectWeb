import React, { createContext } from "react";
import clothes from '../Components/Assets/clothes/clothes'
import { useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < clothes.length+1; index++) {
        cart[index] = 0;
    }

    return cart;
}


const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart()); 


    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = clothes.find((product) => product.id === Number(item))
                totalAmount += itemInfo.price * cartItems[item];
            }
            return totalAmount;
        }
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {clothes, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems};
    return(
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;