// Event Handling in JS
let btn = document.querySelector("#btn");
btn.onclick = (evt) =>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX);
    console.log(evt.clientY);

    console.log("button was clicked!!!");
}
// ==========

let box = document.querySelector("#eventpara");
box.onmouseover = (evt) => {
    console.log("You are in ths Div!")
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX);
    console.log(evt.clientY);
}
// ==========

// Event Handling through Event Listeners
let btn = document.querySelector("#btn");
btn.addEventListener("click" , (evt) => {
    console.log(evt.type);
    console.log(evt.target);
    console.log("Button was clicked - handler 1");
});

btn.addEventListener("click" , () => {
    console.log("Button was clicked - handler 2");
});

const handler3 =  () => {
    console.log("Button was clicked - handler 3");
};
btn.addEventListener("click" , handler3)

btn.addEventListener("click" , () => {
    console.log("Button was clicked - handler 4");
});

btn.removeEventListener("click" , handler3);
// ==========

// Practice Question 
// Change Mode
let modeBtn = document.querySelector("#mode");
let currMode = "light";
modeBtn.addEventListener("click" , () => {
    console.log("You are trying to change mode");
    if(currMode === "light" ){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
});
// ==========

// Change Mode through style.css Styling
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";
modeBtn.addEventListener("click" , () => {
    console.log("You are trying to change mode");
    if(currMode === "light" ){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});
// ==========