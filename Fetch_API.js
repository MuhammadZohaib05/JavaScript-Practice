// API Topic
// Get Facts from an API of Animals
const URL = "https://catfact.ninja/fact";

const getFacts = async () => {
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);

};
getFacts();

// initialize a paragraph and store in a variable 
// then show on HTML page
const URL = "https://catfact.ninja/fact";
let FactPara = document.querySelector("#fact");

const getFacts = async () => {
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    FactPara.innerText = data.fact;

};
getFacts();

// Add a button and when we click on button then 
// getFacts run internally and give results
const URL = "https://catfact.ninja/fact";
let FactPara = document.querySelector("#fact");
let button = document.querySelector("#btn")

const getFacts = async () => {
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    FactPara.innerText = data.fact;
};
btn.addEventListener("click",getFacts)
getFacts();

// Same work through promise chaining
const URL = "https://catfact.ninja/fact";
let FactPara = document.querySelector("#fact");
function getFacts(){
    fetch(URL).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data);
        FactPara.innerText = data.fact;
    });
}
getFacts()

