import Home from "./hom.js";
import About from "./about.js";
import Error from "./errorPage.js";

const routes = {
    "/": Home,
    "/about": About,
}

function router (){
    document.getElementById("wrapper").innerHTML = "";
    const path = window.location.hash.slice(1) || "/";

    const viewHTML = routes[path] || Error;

    viewHTML()
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router );