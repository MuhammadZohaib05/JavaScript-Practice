// CallBack , a function is passed as 
// argument to another function
function sum(a , b){
    console.log(a + b);
}
function calculator(a , b , sum){
    sum(a , b ,);
}
calculator(8 , 5 , sum)
// ==========

function hello(){
    console.log("Hello")
}
console.log("One");
console.log("Two");
setTimeout(hello , 2000);
console.log("Three");
console.log("Four");
// ==========
// or

function hello(){
    console.log("Hello")
}
console.log("One");
console.log("Two");
setTimeout(() => {
    console.log("Hello")
}, 2000); //2 seconds
console.log("Three");
console.log("Four");
// ==========

// Get Data with its id
function getData(DataId){
    console.log("Data",DataId);
};
// ==========
// or

function getData(DataId){
    setTimeout(() => {
        console.log("Data",DataId);
    }, 2000);
};
// ==========

// CallBack Hell ,
// Nested CalBacks one in another
// if we want every result after 2 second from previous
function getData(DataId, getNextData){
    setTimeout(() => {
        console.log("Data",DataId);
        if(getNextData){
            getNextData();
        }
    }, 2000);
};
getData(1,() => {
    getData(2, () => {
        getData(3 , () => {
            getData(4);
        });
    });
});
// ==========

// Creating a new Promise and showing result
let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    // resolve("Success");
    reject("Some Error Occured");
});
// ==========

// promise with javascript
function getData(DataId, getNextData){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
        console.log("Data",DataId);
        resolve("Success");
        if(getNextData){
            getNextData();
        }
    }, 10000);
    })
};
let result = getData(1);
console.log(result);
// ==========

// Resolve and Reject Example
const getPromise = () => {
    return new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("Success");
    // reject("Some Error Occured");
});
}

// for resolve , when promise completed
let promise = getPromise();
promise.then((res) => {
    console.log("Promise Fulfilled : ", res)
});
// for reject , when promise failed
promise.catch((err) => {
    console.log("Promise Failed : ", err);
});
// ==========

// Promise Chaining
function asyncFunc1(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("Data1");
            resolve("Success");
        }, 4000);
    });
};
function asyncFunc2(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("Data2");
            resolve("Success");
        }, 4000);
    });
};
function asyncFunc3(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("Data3 ");
            resolve("Success");
        }, 4000);
    });
};
console.log("Fetching Data1...");
let p1 = asyncFunc1();
p1.then((res) => {
    console.log(res);
    console.log("Fetching Data2...");
    let p2 = asyncFunc2();
    p2.then((res) => {
    console.log(res);
        console.log("Fetching Data3...");
        let p3 = asyncFunc3();
        p3.then((res) => {
        console.log(res);
        });
    });
});
// ==========

// Promise Chaining on CallBack Code
function getData(DataId){
    return new Promise((resolve ,reject) => {
        setTimeout(() => {
        console.log("Data",DataId);
        resolve("Success");
        }, 2000);
    });
};
getData(1).then((res) => {
    console.log(res);
    getData(2).then(() => {
        console.log(res);
    })
})
// ==========

// A proper way of Promise Chaining
function getData(DataId){
    return new Promise((resolve ,reject) => {
        setTimeout(() => {
        console.log("Data",DataId);
        resolve("Success");
        }, 2000);
    });
};
getData(1).then(() => {
    return getData(2);
}).then(() => {
    return getData(3);
}).then((res) => {
    console.log(res);
})
// ==========

// Async-Await Examples
function api(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("Weather Data");
            resolve("Success");
        }, 2000);
    });
};

async function WeatherData(){
    await api();
    await api();
}

function getData(DataId){
    return new Promise((resolve ,reject) => {
        setTimeout(() => {
        console.log("Data",DataId);
        resolve("Success");
        }, 2000);
    });
};
async function GetAllData(){
    console.log("Getting Data1...");
    await getData(1);
    console.log("Getting Data2...");
    await getData(2);
    console.log("Getting Data3...");
    await getData(3);
};

// Use of IIFE because by using it
// we does not need to call a 
// function when executed
function getData(DataId){
    return new Promise((resolve ,reject) => {
        setTimeout(() => {
        console.log("Data",DataId);
        resolve("Success");
        }, 2000);
    });
};
(async function(){
    console.log("Getting Data1...");
    await getData(1);
    console.log("Getting Data2...");
    await getData(2);
    console.log("Getting Data3...");
    await getData(3);
})();