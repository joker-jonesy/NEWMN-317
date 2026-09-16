import Component from '../library/component.js';
import store from '../store/index.js';

export default class List extends Component {
    constructor() {
        super({
            store, element: document.querySelector('.js-items'),
        });
    }

    render() {
        let self = this;

        // console.log(store.state)

        if (store.state.items.length === 0) {
            self.element.innerHTML = `<p>You Haven't Done Anything Yet Loser</p>`;
            return;
        }

        self.element.innerHTML = `
            <ul>
            ${store.state.items.map(item => {
            return `<li>${item}</li>`
        }).join('')}
           </ul>`;

        // self.element.querySelectorAll()


    //     array.forEach normal for loop stuff with array
    //     array.map must return something

    }
}