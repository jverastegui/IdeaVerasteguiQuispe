import React, { useState, createContext } from "react";

export const CartContext = createContext();

const Provider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            let producto = cart.find(x => x.id === item.id);
            cart[cart.indexOf(producto)].cantidad += cantidad;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, cantidad:cantidad}]);    
            console.log([...cart, {...item, cantidad:cantidad}]);        
        }
       
    }

    const removeItem = (id) => {
        if (isInCart(id)) {
            let index = cart.findIndex(x => x.id === id);
            cart.splice(index,1);
            setCart(cart);
        } 
        console.log(cart);
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }

    // const cartTotal = () => {
    //     return cart.reduce((total, item) => total+=item.cantidad, 0);
    // }

    return (
        <CartContext.Provider value={{cart, addItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default Provider;