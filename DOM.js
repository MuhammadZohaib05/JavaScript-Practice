console.log("Hello");
// ==========

console.log(document.body)
// ==========

console.dir(window.document.body) 
// ==========

console.dir(document.body.firstChild);
// ==========

console.dir(document.body.lastChild);
// ==========

let heading = document.getElementById("heading");
console.log(heading);
// ==========

let Heading = document.getElementsByClassName("H4");
console.log(Heading);
console.dir(Heading);
// ==========

let parahs = document.getElementsByTagName("p");
console.dir(parahs);
// ==========

let firstEl = document.querySelector("p");//for 1st element
console.dir(firstEl);
// ==========

let AllEl = document.querySelectorAll("p");//for all elements
console.dir(AllEl);
// ==========

let first = document.querySelector(".H4");//for 1st element
console.dir(first);
// ==========

let All = document.querySelectorAll(".H4");//for 1st element
console.dir(All);
// ==========

let button = document.querySelector("#but");
console.dir(button);
// ==========

let bodyChild = document.querySelector("body").children;
console.dir(bodyChild);
// ==========

let div = document.querySelector("div");
console.dir(div);
// ==========

let body = document.querySelector("body");
console.dir(body);
// ==========

let hidden = document.querySelector("h2");
// ==========

let practice = document.querySelector("h5");
console.dir(practice.innerText);
practice.innerText = practice.innerText + " From Muhammad Zohaib";
console.dir(practice.innerText);
// ==========

let divs = document.querySelectorAll(".box");
divs[0].innerText = "Div1 Updated";
divs[1].innerText = "Div2 Updated";
divs[2].innerText = "Div3 Updated";
// ==========

// another way to do this
let divs = document.querySelectorAll(".box");
let idx = 1;
for(div of divs){
    div.innerText = `New Unique Value ${idx}`;
    idx++;
}
// ==========