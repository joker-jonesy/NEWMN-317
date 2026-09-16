// Entry point for the app: wires up the DOM, the store, and the components.
import store from './store/index.js'
import List from "./components/list.js";
import Status from "./components/status.js"

// Grab the form, the text input, and the element used to show validation errors.
const formElement = document.querySelector(".js-form");
const inputElement = document.querySelector(".new-item-field");
const errorElement = document.querySelector(".error");

// Handle new item submissions.
formElement.addEventListener("submit", event =>{
    event.preventDefault(); // stop the page from reloading on submit

    let  value = inputElement.value;

    // Only accept entries that are at least 8 characters long.
    if(value.length && value.length>=8){
        // Valid input: dispatch an action so the store can add the item, then clear any error message.
        store.dispatch("addItem", value);
        errorElement.innerHTML = "";
    } else{
        // Invalid input: show a validation message instead of updating the store.
        errorElement.innerHTML = "Incorrect Amount of characters to submit";
    }
})

// Create the components that render the list of items and the item count.
const listInstance = new List();
const statusInstance = new Status();
// Render each component once on page load (they'll also re-render automatically on state changes).
listInstance.render()
statusInstance.render();

