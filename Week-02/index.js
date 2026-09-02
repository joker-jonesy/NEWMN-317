// const logInButton = document.querySelector("#loginButton");
//
// logInButton.innerHTML="Log In";
//
// logInButton.addEventListener('click', ()=>{
//     console.log("Logged In");
// })

const nav = document.querySelector('#nav');
let auth = false;

const posts = [
    {
        title:"My First Post",
        text:"My cool text of stuff"
    },
    {
        title:"My Second Post",
        text:"My cool text of stuff 2"
    },
    {
        title:"My Third Post",
        text:"My cool text of stuff 3"
    }
]

function renderPosts(){
    for (let i =0; i< posts.length; i++){
        const ele = document.createElement("div");
        const title = document.createElement("h1");
        title.innerHTML = posts[i].title;
        ele.appendChild(title);
        const text = document.createElement("p");
        text.innerHTML = posts[i].text;
        ele.appendChild(text);
        nav.appendChild(ele);
    }
}

function renderProfile(){
    nav.innerHTML="";
    const avatar = document.createElement("div");
    avatar.classList.add("avatar");
    avatar.innerHTML="LJ";
    avatar.addEventListener("click", ()=>{
        renderLogin();
    });
    nav.appendChild(avatar);
    renderPosts();
}

function renderLogin(){
    nav.innerHTML="";
    const loginButton = document.createElement("button");
    loginButton.innerHTML="Log In";
    loginButton.addEventListener("click", () => {
        renderProfile();
    })
    nav.appendChild(loginButton);
}

renderLogin();
