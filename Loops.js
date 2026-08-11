// Print Zohaib 100 times
for (let i = 1 ; i <= 100 ; i++){
    console.log("Zohaib");
}
// ==========

// sum of n numbers
let n = 5;  
let sum = 0;
for(let i=1; i<n; i++){
    sum += i;
}
console.log(sum);  
// ========== 

// print 1 to 10
 for (let i = 1 ; i <= 10 ; i++){
    console.log(i);
 }
 // ==========

// print 1 to 4 
let i=1;
while(i<5){
    console.log(i);
    i++;
}
// ==========

// print string and its length or size
let str = "Zohaib";
let size = 0;
for (let i of str){
    console.log(i);
    size++;
}
console.log(size);
// ==========

// print object anf its key value pair
let student = {
    name : "Zohaib",
    age : 22,
    occupation : "Student",
    CGPA : 3.68
}
console.log(student);
for(let i in student){
    console.log(i,"=" ,student[i]);
}
// ==========

// print even numbers
for(let i=0 ; i<=100 ; i++){
    if(i % 2 == 0){
    console.log(i);
    }
}
// ==========

// guess number using if else only
let num = 12;
let guess = prompt("Enter Your Guess");
console.log("You Guess : ",guess)
console.log("Game Number was : ",num)
if (guess == num){
    console.log("Correct Guess");
}
else{
    console.log("Wrong Guess!! Try Again");
}
// ==========

// number guess until its correct
let num = 12;
let guess = prompt("Enter Your Guess");
while(guess != num){
    console.log("You Guess : ",guess , "That is Wrong");
    guess = prompt("You Entered Wrong ! Try Again")
}
console.log("Congratulations , You Entered Correct Number , which is ",num);
// ==========


// Template Literals or Template Litering
let SpecialString = `This is Template Literal`;
console.log(SpecialString);
// ==========

// print object using template literals
let student = {
    name : "Zohaib",
    age : 22,
    occupation : "Student",
    CGPA : 3.68
}
let output = `The name of Student is ${student.name} and Age is ${student.age}`;
console.log(output);
// ==========


// String Methods
let str = "Zohaib is Student";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str.slice(1,3));
console.log(str.replace("is" , "are"));
// ==========

let str1 = "Zohaib";
let str2 = " is Student";
console.log(str1.concat(str2));
// ==========
// Also like this
let str1 = "Zohaib";
let str2 = " is Student";
let res = str1 + str2;
console.log(res);
// ==========

let str = "hello";
console.log(str.replaceAll("l","p"));
console.log(str.charAt(4));
// ==========

// Task Questions
let name = prompt("Enter Full Name");
res = "@";
res2 = res.concat(name);
res3 = res2+13;
console.log("Username is ",res3);
console.log(name.length);
// ==========


let name = prompt("Enter Full Name");
let username = "@" + name + name.length
console.log(username)
// ==========

// My Practice

// Multiplication Table
let num = prompt("Enter a Number");
for (i=1 ; i<=10 ; i++){
    console.log(num,"x",i,"=",num*i);
}
// ==========

// sum of number
let sum=0;
for(i=1 ; i<=100 ; i++){
    sum = sum+i;
}
console.log(sum)
// ==========

// reverse counting
for(let i=20 ; i>=1 ;i--){
    console.log(i);
}
// ==========

// count digits
let num = prompt("Enter number");
console.log(num.length);
// ==========

// Factorial Find
let num = prompt("Enter a Number");
let factorial = 1;
for(let i = 1; i <= num ; i++){
    factorial *= i; 
}
console.log(factorial);
// ==========

// Reverse a Number
let num = prompt("Enter a Number");
let reverse = 0;
while(num>0){
let digit = num % 10;
reverse = reverse *10 +digit;
num = Math.floor(num/10);
}
console.log(reverse)
// ==========

// using while loop
let num = prompt("Enter a Number");
reverse = 0;
 while(num > 0){
    let digit = num%10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
 }
console.log(reverse);
// ==========

// using for loop
let num = prompt("Enter a Number");
reverse = 0;
for(;num > 0;num = Math.floor(num / 10)){
    let digit = num%10;
    reverse = reverse * 10 + digit;
 }
console.log(reverse);
// ==========

// converting to string
let num = prompt("Enter a Number");
let reverse = num.split("").reverse().join("");
console.log(reverse);
// ==========

// using function and recursion 
function reverseNumber(num, reverse = 0) {
    if (num === 0) {
        return reverse;
    }
    return reverseNumber(
        Math.floor(num / 10),
        reverse * 10 + (num % 10)
    );
}
let num = Number(prompt("Enter a number:"));
console.log(reverseNumber(num));
// ==========

// sum of digits
// upto that number that we will give as input
let num = Number(prompt("Enter Number"));
let sum = 0;
for(let i=0; i<=num ;i++){
    sum =sum + i;
}
console.log(sum);
// ==========

// using while loop
let num = 1234;
let sum = 0;
while (num > 0) {
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
}
console.log(sum);
// ==========

// usng for loop
let num = Number(prompt("Enter Number"));
let sum = 0;
for (;num > 0;num = Math.floor(num / 10)) {
    let digit = num % 10;
    sum += digit;
}
console.log(sum);
// ==========

// Count digits
let num = Number(prompt("Enter a number"));
let count = 0;
while (num > 0) {
    count++;
    num = Math.floor(num / 10);
}
console.log("Digits =", count);
// ==========

// Prime Number Check
let num=Number(prompt("Enter Number"));
let isPrime=true;
if(num<=1){
    isPrime=false;
}
else{
    for(let i=2; i<num; i++){
        if(num%i===0){
            isPrime=false;
            break;
        }
    }
}
if(isPrime){
    console.log("Prime");
}
else{
    console.log("Not Prime")
}
// ==========

// fabonacci Series
let a = 0;
let b = 1;
let c;
for(i=3;i<=15;i++){
    c =a+b;
    a=b;
    b=c;
}
 console.log(c);
// ==========

// Number Guess
let secret = Math.floor(Math.random()*100)+1;
let guess;
while(guess!==secret){
    guess = Number(prompt("enter the Number to Guess : "));
    if(guess>secret){
        console.log("Your Guess is High");
    }
    else if(guess<secret){
        console.log("Your Guess is Low");
    } else{
        console.log("Correct guess");        
    }
}
// ==========

// Star Printing
for(let i=1; i<=5; i++){
    let star = "";
    for(let j=1; j<=i; j++){
         star += "*";
    }
    console.log(star);
}
// ==========

for(let i=5; i>=1; i--){
    let star = "";
    for(let j=1; j<=i; j++){
        star += "*";
    }
    console.log(star);
}
// ==========

// Triangle
for(i=1;i<=5;i++){
    let row = "";
    for(let j=1; j<=5-i;j++){
        row +=" ";
    }
    for(let k=1;k<=2*i-1;k++){
        row +="*";
    }
    console.log(row);
}
// ==========

// Number Printing
for(let i=1; i<=5; i++){
    let num="";
    for(let j=1; j<=i; j++){
        num +=j;
    }
    console.log(num);
}
// ==========

// Largest Number Check
let largest = Number.NEGATIVE_INFINITY;
for(i=1;i<=5;i++){
    let num = Number(prompt("Enter Numbers " ));
    if(num>largest){
        largest=num;
    }
}
console.log(largest);
// ==========

// Bank Account Management
let balance = 1000;
let choice;
while(choice!==4){
    choice = Number(prompt("1.Check Balance\n2.Deposit\n3.Withdraw\n4.Exit"));
    switch (choice){
        case 1:
            console.log("Balance", balance);
            break;
        case 2:
            let deposit = Number(prompt("Deposit Amount"));
            balance += deposit;
            break;
        case 3:
            let withdraw = Number(prompt("Withdraw amount"));
            if(withdraw<balance){
                balance -= withdraw;
            }
            else{
                console.log("Cannot Withdraw , Insufficient Balance");
            }
            break;
        case 4:
            console.log("Thank You,Now Exited"); 
            break;
            
        default:
            console.log("Invalid Choice");
    }
}
// ==========

// Fizz Buzz Problem
for(let i=1;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }else{
    console.log(i);
    }
}
// ==========

// Hollow Pyramid (Stars)
let n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let k = 1; k<= 2 * i - 1; k++) {
       if (k == 1 || k == 2 * i - 1 || i == n) {
        row += "*";
       }
       else {
        row += " ";
       }
    }
    console.log(row);
}
// ==========
let n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";

    // Print spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // Print stars and spaces
    for (let k = 1; k <= 2 * i - 1; k++) {

        if (k == 1 || k == 2 * i - 1 || i == n) {
            row += "*";
        } else {
            row += " ";
        }

    }

    console.log(row);
}
// ==========

// Heart of Stars
let n = 6;
for (let i = n / 2; i <= n; i += 2) {
    let row = "";

    // Left spaces
    for (let j = 1; j < n - i; j += 2) {
        row += " ";
    }
    // Left half
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    // Middle spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    // Right half
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}
    // Bottom part
for (let i = n; i >= 1; i--) {
    let row = "";
    // Leading spaces
    for (let j = i; j < n; j++) {
        row += " ";
    }
    // Stars
    for (let j = 1; j <= (i * 2) - 1; j++) {
        row += "*";
    }
    console.log(row);
}
// ==========


// Hollow Heart
let n = 6;
// Upper Part
for (let i = n / 2; i <= n; i += 2) {
    let row = "";
    // Left spaces
    for (let j = 1; j < n - i; j += 2) {
        row += " ";
    }
    // Left half
    for (let j = 1; j <= i; j++) {
        if (j == 1 || j == i) {
            row += "*";
        } else {
            row += " ";
        }
    }
    // Middle spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    // Right half
    for (let j = 1; j <= i; j++) {
        if (j == 1 || j == i) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}
// Lower Part
for (let i = n; i >= 1; i--) {
    let row = "";
    // Leading spaces
    for (let j = i; j < n; j++) {
        row += " ";
    }
    // Stars and spaces
    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j == 1 || j == 2 * i - 1 || i == 1) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}
// ==========

// Student Result and Individual Report
let no_of_students = Number(prompt("Enter the Number of Students : "));
let passed = 0;
let failed = 0;
for(let i=1; i<=no_of_students;i++){
    let bio_marks = Number(prompt(`Enter marks of Student ${i} for Biology : `));
    let phy_marks = Number(prompt(`Enter marks of Student ${i} for Physics : `));
    let chem_marks = Number(prompt(`Enter marks of Student ${i} for Chemistry : `));

    let total_marks = bio_marks+phy_marks+chem_marks ;
    let avg_marks = total_marks/3;
    let highest_marks = Math.max(bio_marks,phy_marks,chem_marks);
    let lowest_marks = Math.min(bio_marks,phy_marks,chem_marks);

    console.log("Total Marks : " , total_marks);
    console.log("Average Marks : " , avg_marks);
    console.log("Highest Marks : " , highest_marks);
    console.log("Lowest Marks" , lowest_marks);
    if(avg_marks>=50){
        passed++;
    }else{
        failed++;
    }
}
console.log("Passed Students:", passed);
console.log("Failed Students:", failed);
// ==========

// Student Result and Individual Report + Class Report
let no_of_students = Number(prompt("Enter the Number of Students:"));
let passed = 0;
let failed = 0;
let classTotal = 0;
let classHighest = Number.NEGATIVE_INFINITY;
let classLowest = Number.POSITIVE_INFINITY;
for (let i = 1; i <= no_of_students; i++) {
    let bio_marks = Number(prompt(`Enter Biology marks of Student ${i}:`));
    let phy_marks = Number(prompt(`Enter Physics marks of Student ${i}:`));
    let chem_marks = Number(prompt(`Enter Chemistry marks of Student ${i}:`));
    let total_marks = bio_marks + phy_marks + chem_marks;
    let avg_marks = total_marks / 3;

    let highest_marks = Math.max(bio_marks, phy_marks, chem_marks);
    let lowest_marks = Math.min(bio_marks, phy_marks, chem_marks);

    // Student Report
    console.log(`\n------ Student ${i} Report ------`);
    console.log("Total Marks:", total_marks);
    console.log("Average Marks:", avg_marks);
    console.log("Highest Subject Marks:", highest_marks);
    console.log("Lowest Subject Marks:", lowest_marks);

    // Pass / Fail
    if (avg_marks >= 50) {
        passed++;
    } else {
        failed++;
    }

    classTotal += total_marks;
    if (highest_marks > classHighest) {
        classHighest = highest_marks;
    }
    if (lowest_marks < classLowest) {
        classLowest = lowest_marks;
    }
}
let classAverage = classTotal / (no_of_students * 3);
// Final Class Report
console.log("\n========== CLASS REPORT ==========");
console.log("Class Total Marks:", classTotal);
console.log("Class Average:", classAverage.toFixed(2));
console.log("Highest Marks in Class:", classHighest);
console.log("Lowest Marks in Class:", classLowest);
console.log("Passed Students:", passed);
console.log("Failed Students:", failed);
// ==========