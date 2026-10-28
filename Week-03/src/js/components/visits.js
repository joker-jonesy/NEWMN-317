import Components from "../library/component.js";
import cookies from "../library/cookies.js";
import Component from "../library/component.js";

const COOKIE_NAME = "class_visits";
const THIRTY_DAYS = 60*60*24*30;

export default class Visits extends Component {
    constructor() {
        super({element: document.querySelector(".js-visits")});
        this.bump()
    }

    bump(){
        const count = Number(cookies.get(COOKIE_NAME) || "0")+1;
        cookies.set(COOKIE_NAME, count, THIRTY_DAYS);
        this.render(count);
    }

    render(count = Number(cookies.get(COOKIE_NAME)|| "0")){
        const suffix = count !== 1 ? "s" : ""
        this.element.innerHTML = `You've visited this page ${count} time${suffix}`;
    };

}