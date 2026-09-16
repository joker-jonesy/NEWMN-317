import Component from '../library/component.js';
import store from '../store/index.js';

// Component responsible for showing how many items currently exist.
export default class Status extends Component {

    constructor() {
        // Register with the store (for auto re-render on state change) and target the status element.
        super({
            store,
            element: document.querySelector('.js-status'),
        });
    }

    render(){
        let self = this;
        // Use "item" for exactly one item, "items" otherwise.
        let suffix = store.state.items.length !==1 ? 's':''

        // Display the current count with the correctly pluralized label.
        self.element.innerHTML = `${store.state.items.length} item${suffix}`;
    }

}
