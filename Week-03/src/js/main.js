import store from './store/index.js'
import List from "./components/list.js";
import Status from "./components/status.js"

const formElement = document.querySelector(".js-form");
const inputElement = document.querySelector(".new-item-field");
const errorElement = document.querySelector(".error");

formElement.addEventListener("submit", event =>{
    event.preventDefault();

    let  value = inputElement.value;

    if(value.length && value.length>=8){
        store.dispatch("addItem", value);
        errorElement.innerHTML = "";
    } else{
        errorElement.innerHTML = "Incorrect Amount of characters to submit";
    }
})

const listInstance = new List();
const statusInstance = new Status();
listInstance.render()
statusInstance.render();


