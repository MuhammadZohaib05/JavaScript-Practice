// sum of two variables
function sum(m, n){
    console.log(m + n);
}
sum(5, 9);
// ==========

// after return will not be printed
function sum(m, n){
    add = m + n;
    console.log("before return");
    return add;
    console.log("after return");
}
let result = sum(5, 9);
console.log(result);
// ==========

// Arrow Functions
function sum(a, b) {
    return a + b;
}
const arrowSum = (a, b) => {
    console.log(a + b);
};
console.log(sum(3,4));
arrowSum(5,7);
// ==========

function mul(a ,b){
    return a * b;
}
const arrowMul = (a , b) => {
   console.log(a * b);
}
console.log(mul(3,4));
arrowMul(5,7);
// ==========

// without input arrow function
const hello = () => {
    console.log("Hello");
}
hello();
// ==========

// Practice Questions

//Vowel Count 
function CountVowels(str){
    let count = 0;
    for(const char of str){
        if(char == "a" ||char == "e" ||char == "i" ||char == "o" ||char == "u"){
            count++;
        }
    }
    return count;
}
// ==========

// Vowel Count using arrow function
function CountVowels(str){
    return str;
}
const count = (str) => {
    let count = 0;
    for(const char of str){
        if(char == "a" ||char == "e" ||char == "i" ||char == "o" ||char == "u"){
            count++;
        }
    }
    return count;   
};
// ==========

// CallBack Functions or For Each Loop
let arr = [1, 2, 3, 4, 5];
arr.forEach(function PrintVal(val){
   console.log(val); 
});
// ==========

// also like this
let arr = [1, 2, 3, 4, 5];
arr.forEach((val , idx) => {
   console.log(val , idx); 
});
// ==========

// Practice Questions
// Square of each value in array
let nums = [2, 5, 8, 3, 7, 4];
nums.forEach(function square(squ){
    console.log(squ ** 2);
});
// ==========

//  this methos do the same 
let nums = [2, 5, 8, 3, 7, 4];
nums.forEach((squ) => {
    console.log(squ ** 2);
});
// ==========

// this method too
let nums = [2, 5, 8, 3, 7, 4];
let CalSquare = (squ) => {
    console.log(squ ** 2);
}
nums.forEach(CalSquare);
// ==========

// Map Function
let nums = [1 ,2 ,3 ,4 ,5];
nums.map((val) => {
    console.log(val);
});
// ==========

let nums = [1 ,2 ,3 ,4 ,5];
let newArr = nums.map((val) => {
    return val * val;
});
console.log(newArr);
// ==========

// Filter Method
let nums = [1 ,2 ,3 ,4 ,5];
let EvenArr = nums.filter((val) => {
    return val %2 === 0;
});
console.log(EvenArr);
// ==========

// Reduce Method
// Sum of Array
let arr = [1 ,2 ,3 ,4 ,5];
let Sum = arr.reduce((result , value) => {
    return result + value;
});
console.log(Sum);
// ==========

// Largest Number From Array
let arr = [1 ,2 ,3 ,4 ,5];
let largest = arr.reduce((prev , curr) => {
    return prev > curr?prev : curr;
});
console.log(largest);
// ==========

// Task Questions
// print marks that are 90+
let marks = [78, 99, 78, 90, 95];
let toppers = marks.filter((val) => {
    return val > 90;
})
console.log(toppers);
// ==========

// Take input from user and print
// sum and 
// product of numbers in array
let n = prompt("Enter Numbers in Array");
let arr = [];
for(i=1 ; i<=n; i++){
    arr[i-1]=i;
}
let sum = arr.reduce((res , val) => {
    return res + val;
});
let product = arr.reduce((res , val) => {
    return res * val;
});
console.log("Sum is" , sum);
console.log("Product is" , product);
// ==========