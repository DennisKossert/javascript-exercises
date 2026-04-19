

// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement("p");
para.style = "color: red";
para.textContent = "Hey, I'm red!";

container.appendChild(para);


const h3 = document.createElement("h3");
h3.style = "color: blue";
h3.textContent = "I'm a blue h3!";

container.appendChild(h3);


const lastDiv = document.createElement("div");
lastDiv.style = "border-color: black; background-color: pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div!";

const lastP = document.createElement("p");
lastP.textContent = "ME TOO!";

lastDiv.appendChild(h1);
lastDiv.appendChild(lastP);
container.appendChild(lastDiv);


// the JavaScript file
const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
    console.log(e.target.style.background = "blue");
});