import Store from "../store/store.js";

// Base class that other UI components (List, Status, ...) extend.
// Handles the boilerplate of hooking a component's render() up to store updates.
export default class Component {
    constructor(props ={}) {
        let self = this;

        // Ensure render() always exists, even if a subclass doesn't define one, so calls to it never throw.
        this.render = this.render ||function (){};

        // If a real Store was passed in, subscribe to its "stateChange" event so this
        // component automatically re-renders whenever the store's state changes.
        if(props.store instanceof Store){
            props.store.events.subscribe('stateChange', ()=> self.render());
        }

        // Store the DOM element this component is responsible for, if one was provided.
        if(props.hasOwnProperty("element")){
            this.element = props.element;
        }
    }
}
