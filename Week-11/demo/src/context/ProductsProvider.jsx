import {ProductsContext} from "./ProductsContext.js"
import { useState, useEffect} from "react";

export function ProductsProvider({ children }) {
    const [products, setProducts] = useState([
        {
            name:"Apples",
            cost: 2.99
        }
    ]);

    const addProducts = (prd)=>{
        setProducts([...products, prd]);
    }

    const removeProducts=(idx)=>{
        setProducts(products.filter((product, index) =>  index!== idx));
    }


    return <ProductsContext value={{products, addProducts, removeProducts}}>{children}</ProductsContext>
}