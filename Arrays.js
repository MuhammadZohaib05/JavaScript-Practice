// updating a specific index
let marks = [96,34,22,67,35];
console.log(marks);
marks[3] = 69;
console.log("After updating index 3 marks are : " , marks[3]);
// ==========

// string property at index
let str = "Zohaib";
console.log(str);
console.log(str[0]);
// ==========

// print a number of array
let marks = [96,34,22,67,35];
for (idx = 1 ; idx <= marks.length ; idx++){
    console.log(marks[idx-1]);
}
// ==========

// do same 
for(let mark of marks){
    console.log(mark);
}
// ==========

// Find Sum and Average
let marks = [85,97,44,37,76,60];
let sum = 0;
let avg = 0;
for(let i=0 ; i<marks.length ; i++){
    sum += marks[i];
    avg = sum/marks.length; 
}
console.log("Sum is : " , sum);
console.log("Average is : " , avg); 
// ==========

// and by this method too

let marks = [85,97,44,37,76,60];
let sum = 0;
let avg = 0;
for(let val of marks){
    console.log(val);
    sum +=val;
    avg = sum/marks.length;
}
console.log("Sum is : " , sum);
console.log("Average is : " , avg);
console.log(`Average marks are ${avg}`);
// ==========

// 10% offer on each item and
// give updated array after applying offer
let price = [250 , 645 , 300 , 900 , 50];
percentage = 0;
for(let val of price){
    percentage = val/10;
    new_price = val-percentage;
    console.log(new_price);
}
// ==========

// this method do the same 

let price = [250 , 645 , 300 , 900 , 50];
percentage = 0;
for(let val=0 ; val<price.length ; val++){
    percentage = price[val]/10;
    price[val] = price[val]-percentage;
}
console.log(price);
// ==========

// convert array to string
let fooditems = ["potato", "chips","banana"];
console.log(fooditems);
console.log(fooditems.toString());
// ==========

// merge two arrays
marvel_heroes = ["ironman", "spiderman", "thor"];
dc_heroes = ["Superman" , "Aquaman"];
console.log(marvel_heroes.concat(dc_heroes));
// ==========

// delete and add in same array
let arr = [1,2,3,4,5,6];
arr.splice(2,2,10,11);
console.log(arr);
// ==========

// multiple properties
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log("Complete Array : ",companies);
companies.shift();
console.log("After Removing First Company : ",companies);
companies.splice(2,1,"Ola");
console.log("After Replacing Ola with Uber : ",companies);
companies.push("Amazon");
console.log("After adding Amazon at the end : ",companies);
// ==========

// Complete Class Report
let marks = [78, 45, 92, 61, 88, 35, 70, 55, 96, 40];
let passed = 0;
let failed = 0;
let total = 0;
let highest = Number.NEGATIVE_INFINITY;
let lowest = Number.POSITIVE_INFINITY;
for(let i=0; i<marks.length; i++){
    total += marks[i];
    if(marks[i]>highest){
        highest = marks[i];
    }
    if(marks[i]<lowest){
        lowest = marks[i];
    }
    
    if(marks[i]>=50){
        passed++;
    }else {
        failed++;
    }
}
let avg = total/marks.length;

console.log("Total Marks of Class : ", total);
console.log("Average Marks of Class : ", avg);
console.log("Highest Marks : ", highest);
console.log("Lowest Marks : ", lowest);
console.log("Number of Students Passed : ", passed);
console.log("Number of Students Failed : ", failed);
// ==========