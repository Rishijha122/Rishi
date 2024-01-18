/*
//object in javascript
//an object is a collection of properties. Each property consists of a name/value pair.
let person = {name:"John", age:30, city:"New York"};
console.log(person);
//accessing the value associated with a particular property
console.log("Name : "+person.name);
//adding new property to an existing object
person.country="USA";
console.log(person);
//deleting a property from an object
delete person.age;
console.log(person);
//array push
let arr=[1,2];
arr.push(3);
console.log(arr);
// array pop
let popped=arr.pop();
console.log(popped);
console.log(arr);
//array shift
let myArray = [1, 2, 3];
let removed = myArray.shift();
console.log(removed);
console.log(myArray);
//array unshift
myArray.unshift(4);
console.log(myArray);
//splice method
let fruits = ['apple', 'banana','mango'];
fruits.splice(1,2);
console.log(fruits);
//array map
let numbers = [5,6,7,8];
let squared = numbers.map(function(x){return x*x});
console.log(squared);
//object with function
let obj={
    name:"John",
    greet:function(){
        console.log("Hello! I am " + this.name);
        }
        }
        obj.greet();
//methods
//call - invoke the function
Math.sqrt(9).call({a:100});
//apply - pass arguments as an array
Math.max.apply(null,[1,2,3]);
//bind - create a new function with specific context
var john = {
    age : 25
    };
    var older = function() {
        console.log(`I'm ${this.age} years old.`);
        };
        older.call(john);
        //constructors
        function Car (make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
            }
            let myCar = new Car('Toyota', 'Camry', 2015);
            console.log(myCar);
            //objects and constructors
            let myHouse = {
                color: 'blue',
                walls:4,
                roof:'flat'
                };
                function House (color, walls, roof) {
                    this.color = color;
                    this.walls = walls;
                    this.roof=roof;
                    }
                    let yourHouse = new House ('red', 6, 'sloping');
                    console.log(yourHouse);
                    //inheritance
                    function Vehicle () {}
                    Vehicle.prototype.startEngine = function() {console.log('VroomVroom')}
                    function CarExtended (make, model, year, doors) {
                        this.doors = doors;
                        Car.call(this, make, model, year);
                        }
                        startMotor()
                        {
                            super.startEngine();
                            console.log("Let's go!");
                        }
*/
//filter all type of data from array
// let arr=[3,78,'cat','dog',true,9];
// // function filterData(arr){
// //     return arr6.filter((item)=>{return typeof item === "string"});
// //     };
// //     console.log(filterData(arr6));
//     //map through an array
//     // const number = [1, 2, 3, 4, 5];
//     // const square = num => num * num;
//     // const double = num => num + num;
// function getNumber(item)
// {
//     return typeof item==='number'
// }
// function getBool(item)
// {
//     return typeof item==='boolean'
// }
// function getString(item)
// {
//     return typeof item==='string'
// }
//     function get(arr)
//     {
//         let arr
//         for (let item of arr )
//         {
//             if(fn(item))
//             res.push(item)
    
//     }
// return res
//     }
// console.log(get(arr,getBool))
// console.log(get(arr,getNumber))
// console.log(get(arr,getString))


//     let arr2 =[1,2,3,4,5,true,false,'hello','hii']
//     function get(arr2)
//     {
//         let res=[]
//         for(let item of arr2){
//             if(typeof item==='string')
//             {
//                 res.push(item)
//             }
//         }
//         return res
//     }
//     console.log(get(arr2))
// higher order function
/*   function multiply (a) {
    return b=> a*b;
    }
    console.log(multiply(5)(10)) */
// callBack function
// function printName(callback , name)
// {
//     callback(name);
//     }
//     printName((name)=>console.log(`Hello ${name}`),'John');

//what is DOM
// Document Object Model
// it is an interface to the web page that allows programmers to manipulate HTML and XML documents
// every object in the dom has properties and methods
// elements - represent html tags  div h1 p etc
// attributes - represent data inside the tag <div id="myDiv"> </div>
// text nodes- represents the content between the opening and closing tags "Hello World"
// parentNode - represents the parent element of an element
// childNodes - represents all the children of an element
// nextSibling & previousSibling - represents the next or previous sibling of an
//element
//closure
// A closure is a function that has access to its own scope, the outer function’s variables
// even after the outer function has finished execution. The closure holds these variables
// hostage by keeping them alive in memory. In JavaScript, closures are created every time a
//function is passed as an argument to another function, or whenever a function is returned from
//another function. Essentially, anytime a function has access to an outer function’s scope
//from which it can access variables, then a closure is created.
const add = (x) =>{
    const innerAdd = (y) => x + y ;
    return innerAdd;
    }
    let sum =add(3);
    console.log(sum(4));
    //event delegation
    /* document.querySelector('ul').addEventListener('click',(e)=>{
        if(e.target.tagName === 'LI'){
            alert('You clicked on list item');
            } */