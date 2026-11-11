import {useProducts} from '../context/ProductsContext.js'

function Main (){
    const {products, addProducts, removeProducts} = useProducts();

    const renderedProducts = products.map((product, idx) =>
        <div key={idx}>{product.name}
            <button onClick={()=>removeProducts(idx)}>Remove Item</button>

        </div>);

    return(
        <>
            I Am Text
            {renderedProducts}
            <button onClick={()=>addProducts({name:"Bananas", price: 1.99})}>Add Product</button>


        </>
    )
}

export default Main;