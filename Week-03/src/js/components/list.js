import Component from '../library/component.js';
import store from '../store/index.js';

// Component responsible for rendering the list of items the user has added.
export default class List extends Component {
    constructor() {
        // Pass the store and the DOM element this component controls up to the base Component class.
        // The base class subscribes this component's render() to store changes automatically.
        super({
            store, element: document.querySelector('.js-items'),
        });
    }

    render() {
        let self = this;

        // console.log(store.state)

        // If there are no items yet, show a placeholder message and stop.
        if (store.state.items.length === 0) {
            self.element.innerHTML = `<p>You Haven't Done Anything Yet Loser</p>`;
            return;
        }

        // Build an <li> for every item in state, each with a delete button, and inject the list.
        self.element.innerHTML = `
            <ul>
            ${store.state.items.map(item => {
            return `<li>${item}<button>"Delete Item"</button></li>`
        }).join('')}
           </ul>`;

        // Wire up each delete button after the HTML is rendered (event listeners aren't part of innerHTML).
        self.element.querySelectorAll('button').forEach((button, index) => {
            button.addEventListener('click', () => {
                // Tell the store which index to remove; the store handles the actual mutation.
                store.dispatch('clearItem', {index});
            //     {index:0}
            })
        })

        // self.element.querySelectorAll()


    //     array.forEach normal for loop stuff with array
    //     array.map must return something

    }
}
