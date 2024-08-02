"use strict";

console.log("Prducts JS");

let products = [
    {
        name: "Fanta Zero 500ml",
        price: 1500,
        stock: 7
    },
    {
        name: "Coca Cola 500ml",
        price: 1700,
        stock: 5
    },
    {
        name: "Sprite 500ml",
        price: 1500,
        stock: 7
    },
    {
        name: "Alfajor Rasta",
        price: 1600,
        stock: 15
    },
    {
        name: "Barritas Gallo Chocolate",
        price: 700,
        stock: 10
    },
    {
        name: "Pepsi 500ml",
        price: 1600,
        stock: 6
    },
    {
        name: "7up 500ml",
        price: 1500,
        stock: 8
    },
    {
        name: "Chocolatina Milka",
        price: 2500,
        stock: 12
    },
    {
        name: "Cerveza Quilmes 500ml",
        price: 1800,
        stock: 20
    },
    {
        name: "Galletitas Oreo",
        price: 2000,
        stock: 25
    },
    {
        name: "Agua Mineral Villa del Sur 500ml",
        price: 1200,
        stock: 30
    }    
];

// Declaramos donde vamos a insertar los productos
let productsContainer = document.querySelector(".products-container");

//Por cada producto del arreglo, insertamos un Article hardcodeado en el container
products.forEach((element, index) => {
    productsContainer.innerHTML += `      
          <article>
            <div class="info-prod">
                <h1>${element.name}</h1>
                <h2><span>$ ${element.price}</span></h2>
                <p id="stock${index}">Stock: ${element.stock}</p>
            </div>
            <hr>
            <div class="input-container">
                <input type="number" min="0" max="${element.stock}" id="quantity${index}">
                <button onclick="buyProduct(${index})">Comprar</button>
            </div>
            <div class="alert" id="alert${index}">

            </div>
        </article>`;
});

/**
 * Simulara la compra del producto cuya posicion sera pasada por parametros
 * y modifica el stock correspondiente
 * Ademas esta preparado por si el usuario no ingresa las cantidades correctas
 * @param index Posicion del producto 
 * @returns 
 */
function buyProduct(index){

    //Capturamos el valor del input (Cantidad a comprar)
    let quantity = document.getElementById("quantity"+index).value;

    //Verificamos que no haya errores con el stock
    if(quantity < 0 || quantity > products[index].stock){
        //Limpiamos el input
        document.getElementById("quantity"+index).value = ""

        //Mostramos el error
        document.getElementById(`alert${index}`).innerHTML =  "<p>Error la cantidad ingresada esta mal</p><p>Pruebe nuevamente</p>";

        //Pasados 2 segundos lo limpiamos
        setTimeout(() => {
            document.getElementById(`alert${index}`).innerHTML = "";
        }, 2000);

        //Cortamos la ejecucion de la funcion
        return
    }

    //Obtenemos el producto segun el parametro de entrada
    let element = products[index];
    //Restamos la cantidad comprada del stock
    element.stock = element.stock - quantity;

    //Modificamos el stock del producto en cuestion
    let stock = document.getElementById("stock"+index);
    stock.innerHTML =` Stock: ${element.stock}`;

    //Limpiamos el input
    document.getElementById("quantity"+index).value = ""
    
}

