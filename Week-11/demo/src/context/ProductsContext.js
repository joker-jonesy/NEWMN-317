import {createContext, useContext} from "react";
export const ProductsContext = createContext("products");

export function useProducts() {
    const ctx = useContext(ProductsContext);
    if(!ctx) throw new Error("useProducts must be used within ProductsProvider");
    return ctx;
}


