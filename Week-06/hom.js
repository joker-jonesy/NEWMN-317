export default function Home(){
    const ele = document.createElement("h1");
    ele.innerHTML="hello World";
    document.getElementById("wrapper").appendChild(ele);
}