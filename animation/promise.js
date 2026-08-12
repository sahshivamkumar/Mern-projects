// function asyncOperation(resolve,reject){
//     setTimeout(()=>{
//         console.log("data fetched")
//         resolve ("promise resolvedd");
//     },300);
// }




// //promise creation

// let p=new Promise(asyncOperation)
// console.log("p:",p)

// //promise consumption
// p.then((data)=>{
//     console.log("p:",p)
//     console.log("data: ",data)
// })

// .catch((error)=>{
//     console.log("p:",p);
//     console.log("data:",data);

// })

// wait for 5 sec and print "5 sec printed"
// only then "after 5 sec "should get printed

// function waitFiveSeconds(resolve, reject) {
//     setTimeout(() => {
//         console.log("5 sec printed");
//         resolve();
//     }, 5000);
// }

// let p = new Promise(waitFiveSeconds);

// p.then(() => {
//     console.log("after 5 sec");
// });

// function asyncTask(resolve, reject) {
//     setTimeout(() => {
//         console.log("5 sec passed");
//         resolve();
//     }, 5 * 1000);
// }

// new Promise(asyncTask)
// .then(() => {
//     console.log("after 5 sec");
// })
// .catch((e) => {
//     console.log("error:", e);
// });

// //make function sleeping (time), that takes "time" as an arguement.
// //it should get resolved after "time" seconds passed.
// //on

// function delayMsg(msg){
//     setTimeout(()=>{
//         console.log(msg)
//     },5000)
// }

// new Promise(delayMsg)

// let p1 = delayMsg("Delay step 1")
// p1.then(delayMsg("Delay step 2"))





//'Todo 0: Do something nice for someone you care about

// problem 1: create and consume a basic Promise

// write a function checkage(age) that returns a Promise.
// if age>=18,resolve






// function checkAge(age) {
//     return new Promise((resolve, reject) => {
//         if (age >= 18) {
//             resolve("Access granted");
//         } else {
//             reject("Access denied: must be 18+");
//         }
//     });
// }

// checkAge(20)
//     .then((result) => console.log(result))   // "Access granted"
//     .catch((error) => console.log(error));

// checkAge(15)
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));   // "Access denied: must be 18+"





// function setTimeoutPromisified(t) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, t);
//     });
// }

// async function printLetters() {
//     await setTimeoutPromisified(4000);
//     console.log("A");

//     await setTimeoutPromisified(8000);
//     console.log("B");

//     await setTimeoutPromisified(6000);
//     console.log("C");
// }

// printLetters();



function orderPlaced() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Order Placed");
            resolve();
        }, 1000);
    });
}

function foodPrepared() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Food Prepared");
            resolve();
        }, 1000);
    });
}

function foodDelivered() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Food Delivered");
            resolve();
        }, 1000);
    });
}

orderPlaced()
    .then(() => foodPrepared())
    .then(() => foodDelivered())
    .then(() => console.log("Order Completed"));




























 

