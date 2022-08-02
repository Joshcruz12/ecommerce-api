import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from 'react-hot-toast';


const Context = createContext();

export const StateContext = ({ children }) => {
    
    const [ showCart, setShowCart ] = useState(false);
    const [ cartItem, setCartItems ] = useState([]);
    const [ totalPrice, setTotalPrice ] = useState();
    const [ totalQuantity, setTotalQuantity ] = useState();
    const [ quantity, setQuantity ] = useState(0);
    const [ selectValue, setSelectValue ] = useState();
    

    const addToCart = (product, quantity) => {

        const checkProductOnCart = cartItem.find((item) => item.name === product.name);

        if (checkProductOnCart) {

            setTotalPrice((prevPrice) => prevPrice + product.price * quantity);
            setTotalQuantity((prevQuantity) => prevQuantity + quantity);

            const updateCartItems = cartItem.map((cartProduct) => {
                if (cartProduct.name === product.name)
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + quantity
                    }
            })
            setCartItems(updateCartItems);

        } else {
            product.quantity = quantity;

            setCartItems([...cartItem, { ...product }])
        }
        toast.success(`${quantity} ${product.name} added to cart.`);
    }



    const increaseQuantity = () => {

        setQuantity((prev) => prev  + 1);
            
    }
    const decreaseQuantity = () => {

        setQuantity((prev) => {
            if (prev - 1 < 1) {
                return 1;
            }
            return prev - 1;
        });
    }

    return (
        <Context.Provider
            value={{
                showCart,
                cartItem,
                totalPrice,
                totalPrice,
                totalQuantity,
                quantity,
                increaseQuantity,
                decreaseQuantity,
                addToCart,
            
            }}
        >
            {children}
        </Context.Provider>
    )
}
export const useStateContext = () => useContext(Context);