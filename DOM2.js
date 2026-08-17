// Access a tag
let button = document.querySelector("button");
console.log(button);

// Get Attribute of that tag
let id = button.getAttribute("id");
console.log(id);

// then Set Attribute of that tag
console.log(button.setAttribute("id", "button"));
// ==========

// changing through node.style
let divs = document.querySelectorAll("div")[4];
console.log(divs);
divs.style.backgroundColor = "red";
divs.style.fontSize = "20px";
// ==========

// First Create a Button 
let btn = document.createElement("button");
btn.innerText = "Click Me";
console.log(btn);

// And then Add it in the div
let newdiv = document.querySelectorAll("div")[4];
console.log(newdiv);
newdiv.append(btn);
// newdiv.prepend(btn);
// newdiv.before(btn);
// newdiv.after(btn);
// ==========

//A child is added in Parent
let parent = document.querySelector("#parent");
let child = document.createElement("p");
child.innerText = "Hello World";
parent.appendChild(child);
// ==========

// Deleting a tag or Element
let heading = document.querySelector("h6");
heading.remove();
// ==========

// Removing a Child From Parent 
let parent2 = document.querySelector("#parent2");
let child2 = document.querySelector("#child");
parent2.removeChild(child2);
// ==========

// Practice Questions
// Create a new button and aatt it at the top of the body
let btn2 = document.createElement("button");
btn2.innerText = "click me";
btn2.style.backgroundColor = "red";
btn2.style.color = "black";
let body = document.querySelector("body");
body.prepend(btn2);
// ==========

// Create a new class in CSS and then add it through JS 
let para2 = document.querySelectorAll("p")[3];
let attr = para2.getAttribute("class");
console.log(attr);
para2.classList.add("newClass");
// ==========