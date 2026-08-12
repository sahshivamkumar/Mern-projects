// // // for(let i=0;i<3;i++){
// // //     console.log(i);
// // // }

//const { useTransition } = require("react");

// // //array of nums
// // let nums = [1, 2, 3, 4, 5];

// // //array of objects
// // let arr2=[
// //     {name: "John", age: 30},
// //     {name: "Jane", age: 25},
// //     {name: "Jim", age: 35}
// // ];

// // console.log(arr2[0]); // John
// // console.log(arr2[1].age); // Jane
// // console.log(arr2[2].name); // Jim

// //object of objects 
// const user={
//     name: "shivam",
//     class: "10th",
//     address: {
//         state:"delhi",
//         city:"noida",
//         pincode: 110001
//     }
// }
// console.log(user.name); // shivam
// console.log(user.class); // 10th
// console.log(user.address.state); // delhi
// console.log(user.address.pincode); // 110001


// console.log(typeof ([] + [])); // "string"

// let score=82;
// if(score>=80){
//     console.log("you are eligible for scholarship");
// }

//switch case
// let move="UP";

// switch(move){
//     case "UP":
//         console.log("player moved UP");
//         break;
//     case "DOWN":
//         console.log("player moved DOWN");
//         break;
//     case "LEFT":
//         console.log("player moved LEFT");
//         break;
//     case "RIGHT":
//         console.log("player moved RIGHT");
//         break;
//     default:
//         console.log("player did not move");
// }

// const fruits="pear";

// switch(fruits){
//     case "apple":   
//     case "pear":
//         console.log("This is a fruit");
//         break;
//     default:
//         console.log("This is not a fruit");
// }

// const num1=10;
// const num2=20;
// const operator="+";

// switch(operator){
//     case "+":
//         console.log(num1+num2);
//         break;
//     case "-":
//         console.log(num1-num2);
//         break;
//     case "*":
//         console.log(num1*num2);
//         break;
//     case "/":
//         console.log(num1/num2);
//         break;
//     default:
//         console.log("Invalid operator");
// }

// for (let i = 1; i <= 10; i++) {

//     let output = "";

//     if (i % 3 === 0) output += "Fizz";
//     if (i % 5 === 0) output += "Buzz";
//     if (i % 7 === 0) output += "Twist";

//     console.log(output || i);
// }

// for (let i = 1; i <= 30; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     }
//     else if (i % 3 === 0) {
//         console.log("Fizz");
//     }
//     else if (i % 5 === 0) {
//         console.log("Buzz");
//     }
//     else {
//         console.log(i);
//     }
// }
//for in loop

                // const car = {
                //     name: "wagonR",
                //     price: 500000,
                //     color: "blue"
                // };

                // for (let key in car) {
                //     console.log(key, car[key]);
                // }

// const fruits = ["apple", "banana", "orange"];

// fruits.forEach(function (fruit, index) {
//     console.log(`fruit ${index} : ${fruit}`);
// }
// );




// const nums=[1, 2, 3, 4, 5];
// const squares=[];

// nums.forEach(function(num){
//     squares.push(num*num);
// });
// console.log(squares);


// const colors=["Blue","Black","Green","voilet"];
// colors[1]="Yellow";
// colors.push("Red");

// console.log(colors.length);

// for(let i=0;i<colors.length;i++){
//     console.log(colors[i]);
// }

// //shift and unshift
// colors.shift();
// colors.unshift("Pink");
// console.log(colors);

// let task=[];
// task.push("eat");
// task.push("sleep");
// task.push("code");
// task.push("repeat");


// function sum(a,b){
//     return a+b
// }

// sum(2,3)

// let sum1 = (a,b) => {
//     return a+b
// }

// console.log(sum1(2,3))

// let sum2 = (a,b) => a+b

// console.log(sum2(2,3))



// function goodbye(name){
//     console.log(`Goodbye ${name}`);
// }
// goodbye("Alpesh");
// let goodbye1 = (name) => {
//     console.log(`Goodbye ${name}`);
// }
// goodbye1("Bhavesh");


// (function(){
//     var secret="hidden";
//     console.log("Inside IIFE",secret);

//     console.log(typeof secret); // string
// })

// console.log(typeof secret); // undefined



// function add(a,b,...rest){
//     console.log(a)
//     console.log(b)
//     console.log(rest)
// }
// add(10,20,30,40,50);


// function sum(a,b,...rest){
//     console.log(rest)

//     let total=0;
//     for(let i=0;i<rest.length;i++){
//         total+=rest[i];
//     }

//     console.log(total);
// }



// sum(10,20,30,40,50);

// function Sum(...rest){
//     console.log(rest)

//     return rest.reduce((total,curr) => {
//         return total + curr;
//     }, 0);
// }

// console.log(Sum(10,20,30,40,50));



// function makeSentence(...rest){
//     console.log(rest.join("-"));
// }
// makeSentence("I","am","learning","JavaScript");


// const str="javascript";

// console.log(str.slice(0,4)); // "java"
// console.log(str.slice(4)); // "script"
// console.log(str.slice(-6)); // "script"


// const sentence="I am learning JavaScript";
// console.log(sentence.split(" "));
// console.log("a,b,c".split(","));
// console.log("hello".split(""));


// const url ="https://example.com";
// console.log(url.split("/"));
// const path = url.split("/").slice(3).join("/");
// console.log(path); // "example.com"


// const text="I like cats. cats are great.";

// console.log(text.replace("cats","dogs")); // "I like dogs. dogs are great."
// console.log(text.replaceAll("cats","dogs")); // "I like dogs. dogs are great."



// //add two numbers as an arguement using fat arrow function

// let addTwoNumbers = (a,b) => a+b;

// console.log(addTwoNumbers(5,10)); // 15


// //implicit is autimatically returned and explicit is returned using return keyword

// a=10;
// b="10";

// console.log(a==b);
// console.log(a===b); // false

// //explicit type conversion

// let str="123";
// let num=Number(str);
// console.log(typeof num); // "number"


// //json = array of objects
// let shivam={
//     name :"shivam",
//     age: 20,
//     role: "developer"
// }

// let json=JSON.stringify(shivam);
// console.log(json); // '{"name":"shivam","age":20,"role":"developer"}'


// let prithvi={
//     name: "prithvi",
//     age: 25,
//     role: "designer"
// }

// let json=JSON.stringify(prithvi);
// console.log(json); // '{"name":"prithvi","age":25,"role":"designer"}'

// let parsedJson=JSON.parse(json);
// console.log(parsedJson); // {name: "prithvi", age: 25, role: "designer"}

// //closure

// function harsh(){
//     let name="kuchbhi";
//     function harshita(){
//         console.log(name);
//     }
//     return harshita;
// }

// let result=harsh();
// result(); // "kuchbhi"


// function counter(){
//     let count =0;

//     function increment(){
//         console.log(count);
//         count++;
//     }
//     return increment;
// }

// let myCounter=counter();
// myCounter();
// myCounter();
// myCounter();
// myCounter();
// myCounter();


// function harsh(){
//     let name="kuchbhi";
//     function harshita(){
//         console.log(name);
//     }
//     return harshita;
// }

// let result=harsh();
// result(); // "kuchbhi"



// setTimeout(function(){
//     console.log("hello")
// },8*1000)


// function sayHello(){
//     console.log("hello func runs")
// }

// setTimeout(sayHello,6000)


// console.log("start ")

// setTimeout()=>{
//     console.log("run after 3 sec")
// },3000)

// console.log()



// let count=0;

// setInterval(function(){
//     count+=1;
//     console.log("count:",count)
// },1000)


 
// console.log("A");

// setTimeout(() => {
//     console.log("B");

//     setTimeout(() => {
//         console.log("C");
//     }, 3000);


// }, 2000);


// const arr = ["cow", "dog", "rabbit", "bear", "tiger"];

// let res = arr.map((animal) => {
//     return `Animal: ${animal.toUpperCase()}`;
// });

// console.log(res);


// const nums=[40,50,60,11,56]

// let res3=nums.filter(function(x){
//     if(x>30){
//         return x
//     };
// })

// console.log(res3)
//------------------------------------------------------------------------------------------

// const nums = [40, 50, 60, 11, 56, 15, 12, 6];

// let oddNumbers = nums.filter(function(x) {
//     return x % 2 !== 0;
// });

// console.log(oddNumbers);


// const arr = ["mango", "kiwi", "dragonfruit", "sunmelon", "cherry", "watermelon", "goa"];

// const res = arr.filter(function(item) {
//     return item.length <= 4;
// });

// console.log(res);




// const numsArr = [10, 29, 11, 43, 37];

// const max = numsArr.reduce((largest, current) =>
//     current > largest ? current : largest
// );

// console.log(max);

// const numsArr = [10, 29, 11, 43, 37];

// let max = numsArr[0];

// for (let i = 1; i < numsArr.length; i++) {
//     if (numsArr[i] > max) {
//         max = numsArr[i];
//     }
// }

// console.log(max);
// const numbers = [1,2,3,4,5,6,7,8,9,10];

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {

//     if (numbers[i] % 2 === 0) {
//         sum += numbers[i] * numbers[i];
//     }
// }

// console.log(sum);


const numbers = [1,2,3,4,5,6,7,8,9,10];

const result = numbers
    .filter(num => num % 2 === 0)
    .map(num => num * num)
    .reduce((sum, num) => sum + num, 0);

console.log(result);