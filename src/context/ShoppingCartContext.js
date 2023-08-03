import { createContext, useContext, useState } from "react";

const ShoppingCartContext=createContext({});
const initialCartItem=[]
const ShoppingCartProvider=({children})=>{
    const [cartItem,setCartItem]=useState(initialCartItem);
    const CartQuantity=cartItem.reduce(
        (quantity,item)=>item.quantity+quantity,0
    )
    const CartItemQuantity=(id)=>{
        return (cartItem.find((item)=>item.id===id)?.quantity||0)
    }

    const increase=(id)=>{
        setCartItem((currentItem)=>{
            if(currentItem.find((item)=>item.id===id)==null){
                return [...cartItem,{id,quantity:1}]
            }
            else{
                return currentItem.map((item)=>{
                    if(item.id===id){
                        return {...item,quantity:item.quantity +1}
                    }
                    else{
                        return item
                    }
                })
            }
        })
    }
    const decrease=(id)=>{
        setCartItem((currentItem)=>{
            if(currentItem.find((item)=>item.id===id)?.quantity===1){
                return cartItem.filter((item)=>item.id !==id)
            }
            else{
                return currentItem.map((item)=>{
                    if(item.id===id){
                        return {...item,quantity:item.quantity -1}
                    }
                    else{
                        return item
                    }
                })
            }
        })
    }
const remove=(id)=>{
    setCartItem((currentItem)=>cartItem.filter((item)=>item.id !==id))
}

    return(
        <ShoppingCartContext.Provider value={
            {
                cartItem,
                increase,
                decrease,
                CartItemQuantity,
                CartQuantity,
                remove
            }

        }>
                    {children}
        </ShoppingCartContext.Provider>
    )

}
export default ShoppingCartProvider
export const useShoppingCart=()=>{
    return useContext(ShoppingCartContext)
}