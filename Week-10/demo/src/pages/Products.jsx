import {useParams} from "react-router-dom"

function Products() {

    const params = useParams();

    const products = [
        {
            id: 56,
            name: "Normal",
            price: 1.5
        },
        {
            id: 78,
            name: "Chili Cheese",
            price: 3.5
        },
        {
            id: 90,
            name: "Chicago Dog",
            price: 5
        }
    ];

    const chosenProduct = products.filter(product =>
        product.id === Number(params.id)
    )[0];

    console.log(chosenProduct);

    return (
        <>
            {chosenProduct? <div>
                <h1>{chosenProduct.name}</h1>
                <p>${chosenProduct.price}</p>
            </div>:<div>Product does not exist</div>}
        </>
    )
}

export default Products;