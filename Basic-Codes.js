// Arithmetic Operators
// ==========
let a=5;
let b=4;
console.log(a**b);

// Increment Operators
// ==========
a++;
console.log(a);

// Assignment Operator
// ==========
let a = 7;
a+=3;
console.log(a)
// ==========
let a=3;
let b=4;
console.log(a>b);

// OR Operator
// ==========
let con1 = a>3;
let con2 = a===3;
console.log(con1 || con2);

// If-Else Statements
// ==========
let a = 7;
if(a%2==0){
    console.log("Even")
} else{
    console.log("Odd")
};

// ==========
let age = 12;
if(age < 18 ){
    console.log("You are Child");
}
else if( age >= 18 && age <=30){
    console.log("You are Young");
}
else{
    console.log("You are Adult")
}

// ==========
let age = 67;
age > 18 ? console.log("Adult") : console.log("Not Adult");
// ==========
const age = 60;
switch(true){
    case(age<18):
        console.log("You are not Adult yet");
        break;
    
    case(age >=18 && age <30):
        console.log("You are young now");
        break;
    
    case(age >=30 && age < 60):
        console.log("You are Adult now");
    break;
    default:
        console.log("Invalid Age");
}

// ==========
let num = prompt("Enter a Number");
if(num%5==0){
    console.log(num," is Multiple of 5");
}
else{
    console.log(num,"is not multiple of 5");
}

// ==========
let marks = prompt("Enter the marks");
if (marks >=80 && marks <= 100){
    console.log(" A Grade is Assigned");
}
else if (marks >=70 && marks < 79){
    console.log(" B Grade is Assigned");
}
else if (marks >=60 && marks < 69){
    console.log(" C Grade is Assigned");
}
else if (marks >=50 && marks < 59){
    console.log(" A Grade is Assigned");
}
else {
    console.log("F Grade is Assigned");
}

// ========== 
let marks = prompt("Enter the marks");
let grade;
if (marks >=80 && marks <= 100){
    grade="A";
}
else if (marks >=70 && marks <= 79){
    grade="B";
}
else if (marks >=60 && marks <= 69){
    grade="C";
}
else if (marks >=50 && marks <= 59){
    grade="D";
}
else {
   grade="F";
}
console.log("Your Grade is ",grade);