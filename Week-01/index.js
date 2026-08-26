const products = [
    {name:"apples", inventory:4},
    {name:"green beans", inventory:20},
    {name:"oranges", inventory:10},
]

const someobject ={

}

function getProduct(product) {
    if(product.inventory<10){
        console.log("Name: "+product.name+" LOW IN STOCK");
    }else{
        console.log("Name: "+product.name);
    }
}

// function that is passing in an argument to print out a value in the console
// getProduct("pears");

// function grabs specific value of an array
getProduct(products[0])

for(let i=0; i<products.length; i++){
    getProduct(products[i]);
}