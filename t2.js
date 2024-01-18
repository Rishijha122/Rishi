// undefined vs null
// 1. undefined is a primitive data type, while null is an object data type in JavaScript.
// 2. Undefined represents the absence of value or intentionally no value assigned to a variable. Null also represents the absence of value but it
// 2. Undefined represents the absence of value or the non-initialized state of a variable. Null on the other hand signifies intent
// turnery operator
let x = undefined;
console.log(x === undefined ? 'undefined' : 'not undefined'); // output: undefined
let y = null;
console.log(y === null ? 'null' : 'not null'); // output: null
// 2. The typeof operator returns "undefined" for both undefined and null values.
//    However, it does not return the string "undefined". It only returns "object" for null value.
console.log(typeof x); // output: undefined
console.log(typeof y); // output: object
// 3. Use null when you want to represent that something is intentionally empty/non-existent.
//    Use undefined when you don’t know if something has a value or not (unknown).
// logical operator
// && means AND, || means OR
// ! means NOT
/*
const isAdult = true;
if (!isAdult) {
    console.log('You are not adult!');
    } else {
        console.log('You are adult!');
        } */
        let a =75
        let b=90
        if (a > 77 && b>90) 
        {
            console.log('A')
            }else if (a > 68 || b > 74 )
            {
                console.log ('B')
                }
function sum(){
    const nums=[...arguments]
    let total=nums.reduce((accumulator,currentValue)=> accumulator+ currentValue ,0)
    return total
}
    console.log(sum(1,2,3))

    function kuch()
    {
        console.log('hello')
        console.log('hii')
    }
   let user = kuch();
   console.log(user)
   function erase(a)
   {
    console.log(a)
   }
   erase(6)

   const yrur=()=>{
    console.log('arrow')
   }
   yrur()
// arrow function
/*
let name='John'
console.log(`Hello ${name}`)
*/
// template literals
// destructuring
/*
const person={
    firstName:'John',
    lastName:'Doe',
    age:50
    }
    console.log(`${person.firstName} ${person.lastName} is ${person.age} years old.`);
    */
   //destructuring
   /*
   const person={
    firstName:'John',
    lastName:'Doe',
    age:50,
    country:'USA'
    }
    const {firstName,lastName}=person;
    console.log(`${firstName} ${lastName}`);
    */
   // default value of parameter
   /*
   function greetings(name="Guest")
   {
    return `Hello ${name}`;
    }
    console.log(greetings());
    */
   //rest parameters
   /*
   function total(...numbers){
    let sum=0;
    for (number of numbers)
    {
        sum+=number;
        }
        return sum;
        }
        console.log(total(1,2,3));
        */
// non-primitive data type
const obj ={
    x: 1,
    y: 2,
    };
    console.log(obj.x + " " + obj.y);
    const err=[1,2,3];
    console.log(err[0]+" "+err[1]+" "+err[2]);
    //object literal syntax
    const point={x:1 , y:2};
    console.log("Point coordinates are :"+point.x+" "+point.y);
    //array literals syntax
    const errPoints=[
        {x:1,y:4},
        {x:2,y:5},
        {x:3,y:6}
        ];
        console.log("Array points coordinates");
        for(let pnt of errPoints)
        console.log(pnt.x+ " "+pnt.y);
    let arr=['hello',1,true]
    for (const i of arr) {
        console.log(i)
    }
    for (const i in arr) {
        console.log(i)
    }
    let array =[1,2,3,4,5,6,7]
    array.forEach((a,b,c)=> {
        console.log(a,b,c);
        
    });
    //map function
    /*
    array.map((value,index,arr)=>{
        index*2
        })
        .filter((value,index,self)=>{
            return value%2==0;
            }).reduce((accumulator,currentValue,index,arr)=>{
                accumulator+=currentValue;
                },0)
                console.log(array);
                console.log(sum);*/
                let sum=array.reduce((accu,currenVal,indx,
                    arry)=>{return accu+currenVal});
                    console.log(sum);
                    let mult=array.reduce((acca,curra)=>acca*cur
                    )
                    console.log(mult);
// reduce function
/*let fruits = ['apple', 'banana','cherry'];
console.log(`Original Array : ${fruits}`);
let fruitReduce = fruits.reduce((previousValue, currentValue) => previous
+ ',' + currentValue);
console.log(`Fruit List after reducing : ${fruitReduce}`); */
//filter function
/*let numbers=[1,2,3,4,5];
numbers.filter((val,ind,ar)=>{
    return val%2===0
    })
    .forEach((val,ind,arr)=>{
        console.log(`The even number is ${val}`)
        });  */
// find function
let array1=[5,6,7,8,9];
console.log(array1.find(num=> num % 2 == 0)); //
// this will give the first even number in the array
// findIndex function
//let arr = [4, 9, 7, 3, 2, 5
  //  , 1 ];
   // console.log(arr.findIndex(val => val > 6)); // it gives index
  //  of element which is greater than 6
    /*
    * The findIndex() method returns the index of the first element in the array where testFunction
    returns true, or -1 if no elements satisfy the testFunction.
