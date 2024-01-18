// var vs let vs const
// 1. var: hoisted to the top of function scope and not block scoped, can be reassigned anywhere in the code
var x = 'global';
if (true) {
    console.log(x); // undefined
    var x = 'local';
    }
    console.log(x); // local
// 2. let: not hoisted, only accessible within its own block scope, cannot be redeclared in the same block without
// 2. let: not hoisted, only available after its declaration, also not block scoped, but limited to the current block
// 2. let: not hoisted, only available within its own block scope, cannot be redeclared in that same block scope
    let y = 'global';
    if (true) {
    console.log(y); // global
    let y = 'local';
    console.log(y); // local
    }
    console.log(y); // ReferenceError: y is not defined
// 3. const: similar to let, but cannot be reassigned once it's declared with a value
        const z = 'global';
        if (true) {
            console.log(z); // global
            // Error: Assignment to constant variable.
            // z = 'new global';
            // But you can point it to a new object
            z = { newGlobal: true };
            console.log(z); // { newGlobal: true }
            }
            console.log(z); // { newGlobal: true }</s>
//backtick
`Hello ${name}`;
let name = "John";
console.log(`Hello ${name}`)
//template literals are string literals allowing embedded expressions. You can use multi-line strings and include variables, along with special characters via back
//template literals - multiline strings
const person = {
    firstName: "Joe",
    lastName: "Smith"
    };
    console.log(`${person.firstName} ${person.lastName}`);
    //interpolation
    `My name is ${person.firstName} ${person.lastName}.`;
//camelcase
const myFavoriteColor = "blue";
console.log(myFavoriteColor);
//PascalCase
class MyClass {}
console.log(MyClass);
//Title Case
const titleCase = "hello world";
console.log(titleCase.split('').map((char, i) => i > 0 && char === char.toUpperCase()
? `'${char}'` : char).join(''));
//lower case
const lowerCase = "HELLO WORLD";
console.log(lowerCase.toLowerCase());
//upper case
const upperCase = "hello world";
console.log(upperCase.toUpperCase())
//lectic
const originalString = "Hello World!";
const reversedString = originalString.split("").reverse().join("");
console.log(reversedString);
//trim
const str1 = "   Hello World   ";
const trimmedStr1 = str1.trim();
console.log(str1);
console.log(trimmedStr1);
//startsWith & endsWith
const helloWorld = "Hello World";
console.log(helloWorld.startsWith("Hello"));
console.log(helloWorld.endsWith("World"));
//includes
console.log(helloWorld.includes("o Worl"));
//padStart & padEnd
const paddedHello = "Hello".padStart(5);
const paddedWorld = "World".padEnd(5);
console.log(paddedHello + " " + paddedWorld);
//repeat
const repeatedHello = "Hello".repeat(3);
console.log(repeatedHello);
//substring
const fullName = "John Doe";
const firstName = fullName.substring(0, 4);
const lastName = fullName.substring(5);
console.log(firstName);
console.log(lastName);
//===
let x = 1;
if (x === 1) {
    console.log("x is equal to 1")
    } else {
        console.log("x is not equal to 1")
        }
        //==
        x = "1"
        if (x == 1) {
            console.log("x is equal to 1 after being changed to a string")
            } else {
                console.log("x is still not equal to 1 even though it was changed to a string")
                }
                