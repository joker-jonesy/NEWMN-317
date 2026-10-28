export default function ErrorPage(){
    const ele = document.createElement("h1");
    ele.innerHTML="This Page does not exist";
    document.getElementById("wrapper").appendChild(ele);
}