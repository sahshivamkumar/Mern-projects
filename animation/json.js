// const user = {
//     name : "Rahul",
//     location : "Ahmedabad",
//     age:undefined,
//     great : function(){
//         console.log("hi there")
//     }
// }
//  console.log(typeof user)
//  console.log("user: ",user)
 
//  let res = JSON.stringify(user)
//  let res2 = JSON.parse(res)
 
//  console.log(res)
//  console.log(res2)
//  console.log(typeof res2)

//  class student{
//     constructor(name,id){
//         this.name=name;
//         this.id=id;

//     }
//     introduce(){
//         console.log("Hi,I am"+this.name + "with id:" + this.id);
//     }
//  }

//  let s1=new student("Rahul",101);
//  s1.introduce();


//  class student{
//     constructor(name,marks){
//         this.name=name;
//         this.marks=marks;
//     }
//     getAvg(){
//         return this.marks.reduce((sum,val) => sum + val,0)/ this.marks.length;
//     }
//  }

//  let s1 = new student("Rahul", [80,90,85]);
//  console.log(s1.getAvg());



//  class Circle{
//     constructor(radius){
//         this.radius=radius;
//     }
//     getArea(){
//         return Math.PI * this.radius * this.radius;
//     }
//  }
//  let c1= new Circle(5);
//  console.log(c1.getArea());


// class Rectangle {
//     constructor(width, height) {
//         this.name = "Rectangle";
//         this.width = width;
//         this.height = height;
//     }

//     get getArea() {
//         return this.width * this.height;
//     }
// }

// const rect = new Rectangle(10, 5);

// console.log(rect.name);      // Rectangle
// console.log(rect.width);     // 10
// console.log(rect.height);    // 5
// console.log(rect.getArea);   // 50

// //make a class "square" extending the "Rectangle" class. and print the area for the length=4

// class Square extends Rectangle {
//     constructor(length) {
//         super(length, length);
//     }
// }

// const sq = new Square(4);
// console.log(sq.getArea);   // 16


// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} makes a sound`);
//     }
// }

// class Dog extends Animal {
//     constructor(name) {
//         super(name);
//     }

//     speak() {
//         console.log(`${this.name} barks`);
//     }
// }

// let d1 = new Dog("Tommy");
// d1.speak();




// class Car {
//     constructor(model, year) {
//         this.model = model;
//         this.year = year;
//     }

//     displayInfo() {
//         console.log(`This car is a ${this.year} ${this.model}`);
//     }
// }

// let c = new Car("BMW M4", 1999);
// c.displayInfo();

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     area() {
//         console.log(`Area: ${this.width * this.height}`);
//     }

//     perimeter() {
//         console.log(`Perimeter: ${2 * (this.width + this.height)}`);
//     }
// }

// let r = new Rectangle(10, 5);
// r.area();
// r.perimeter();







class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}

class Manager extends Employee {
  constructor(name, salary, teamSize) {
    super(name, salary);
    this.teamSize = teamSize;
  }

  describe() {
    return ${this.name} manages a team of ${this.teamSize};
  }
}

let manager = new Manager("Alice", 80000, 5);
console.log(manager.describe());0


 