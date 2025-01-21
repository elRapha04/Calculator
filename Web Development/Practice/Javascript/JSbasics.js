/*
let text = "shish";

console.log(typeof(text));
*/

// console.error("error message");

//LOOPS
/* for in/of
const nums = ['a', 'b', 'c'];

for (var num in nums){
    console.log(num); // '0', '1', '2'
}

for (var num of nums){
    console.log(num); // 'a', 'b', 'c'
}
*/
/* for
let i = 0;

for (i; i < 5; i++) {
    console.log(i);
    }
*/
/* forEach
const nums = [1, 2, 3];

nums.forEach(num => console.log(num));

console.log(nums);
*/
/* while
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
    }
    */

//FUNCTION
/*
function greet(name) {
    name = window.prompt("What's your name?");
    console.log(`Hello there ${name}!`);
}

greet();
*/

//ARRAYS
/*
const array1 = ["apple", "banana", "mango", "coconut"];
const arrLen = array1.length;
console.log(array1[0]);

console.log(array1[arrLen-1]);
console.log(array1.at(-1));
*/

//OBJECTS

/*
class Person{
    constructor(name, age, gender){
        name = this.name;
        age  = this.age;
        gender = this.gender;
    }
}

person1 = new Person("meow", -27, "Amoeba");

console.log(person1.name);

person1.name = "sheesh";
person1.gender = "catto";

console.log(person1.name);
console.log(person1.gender);
*/

//STRING METHODS

/*
let text = "hello world";

console.log(text.indexOf("world"));

text.
console.log(text);
*/

//VARIABLE SCOPES (GLOBAL VS FUNCTION VS BLOCK)

/*
var wkwk1 = "shish"; // GLOBAL
function foo(){
    if (true){
        var wkwk1 = "funcShish"; // FUNCTION
        const wkwk2 = "shesh"; // BLOCK
        let wkwk3 = "sheseh"; // BLOCK
    }
    console.log(`func: ${wkwk1}`);
    // console.log(wkwk3);
    // console.log(wkwk2);
}

foo();
console.log(wkwk1);
*/

// SYMBOLS

/*
let id = Symbol("id");

const person1 = {
    name: "Jesreal",
    [id]: 12345
}

const person2 = {
    name: "Jesfake",
    [id]: 12345
}

console.log(person1[id]);
console.log(person2[id]);
console.log(person1[id] === person2[id]);
*/

// ERROR HANDLING PART 1

/*
try {
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if (divisor == 0){
        throw new Error("You can't divide by ZERO!")
    }
    if (isNaN(dividend) || isNaN(divisor)){
        throw new Error("Please enter a NUMBER")
    }
    
    const quotient = dividend / divisor;
    console.log("Quotient: ", quotient);
}
catch(error){
    console.error(error);
}

console.log("You have reached the end!");
*/

// SPREAD OPERATOR

/*
let fruits = ["apple", "orange", "banana"];
let newFruits1 = fruits;
let newFruits2 = [...fruits];

console.log(newFruits1 == newFruits2); // false
*/

/*
const array1 = [5, 2, 4, 1, 3];

const sortedArr = array1.sort();

console.log(sortedArr);
*/

// PROMISES -----------------------------------------------------------------------------
/*
function walkDog(){
    
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            
                const state = true;
            
                if (state) {
                    resolve("You walk the dog 🐕");                    
                } else {
                    reject("You DIDN'T walk the dog ❌");
                }
        }, 3000);
    })
}

function cleanKitchen(){
    
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            
                const state = false;
            
                if (state) {
                    resolve("You clean the kitchen 🧹");                    
                } else {
                    reject("You DIDN'T clean the kitchen ❌");
                }
        }, 2000);
    })
}

function takeTrash(){
    
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            
                const state = true;
            
                if (state) {
                    resolve("You take out the trash 🗑️");                    
                } else {
                    reject("You DIDN'T take out the trash ❌");
                }
        }, 1000);
    })
}
*/

// Method 3 (async/await)
/*
async function doChores(){

    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
        
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeTrashResult = await takeTrash();
        console.log(takeTrashResult);
    } catch (error) {
        console.error(error);
    }
}
doChores();
*/

// Method 2 (Method Chaining) for promises
/*
walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeTrash()})
         .then(value => {console.log(value); console.log("You finished all tasks!");})
         .catch(error => console.error(error));
*/

// Method 1(Callback Hell) for functions
/*
walkDog(() => {
    cleanKitchen(() => {
        takeTrash(() => {
            console.log("You finished all tasks ✅");
        })
    })
});
*/

//Practice
/*
function learnHTML(){
    const state = true;
    return new Promise((resolve, reject) => {

        if (state){
            resolve("You learned HTML");
        }
        else{
            reject("You DIDN'T learn HTML");
        }
    })
}

function learnCSS(){
    const state = true;
    return new Promise((resolve, reject) => {

        if (!state){
            resolve("You learned CSS");
        }
        else{
            reject("You DIDN'T learn CSS");
        }
    })
}

function learnJS(){
    const state = true;
    return new Promise((resolve, reject) => {

        if (state){
            resolve("You learned JS");
        }
        else{
            reject("You DIDN'T learn JS");
        }
    })
}

async function wkwk() {
    try {
        const learnHTMLResult = await learnHTML();
        console.log(learnHTMLResult);
        
        const learnCSSResult = await learnCSS();
        console.log(learnCSSResult);
    
        const learnJSResult = await learnJS();
        console.log(learnJSResult);
    } 
    catch (error) {
        console.error(error);
    }
}

wkwk();
*/
//----------------------------------------PROMISES (END)--------------------------------------

//WINDOW SCROLL
/*
const txt = document.querySelector("#text");

function print(event){
    console.log(window.innerWidth);
    
}

window.addEventListener("scroll", print);
*/

//CALLBACKS
/*
function hello(callback){
    console.log("Hello");
    callback();
}

function bye(){
    console.log("Bye");
}

hello(bye);
*/

//PROMISES PRACTICE===========================================================================
/*
function order() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Food ORDERED");
      reject("Food NOT ORDERED");
    }, 2000);
  });
}
function prepare() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve("Food PREPARED");
      reject("Food NOT PREPARED");
    }, 1000);
  });
}
function deliver() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Food DELIVERED");
      reject("Food NOT DELIVERED");
    }, 1500);
  });
}

async function handleOrder() {

    try {
        console.log(await order());
        console.log(await prepare());
        console.log(await deliver());
    } catch (error) {
        console.error(error);
        console.error("TRANSACTION UNSUCCESSFUL");
    }

    
}

handleOrder();

/*
order().then((value) => {console.log(value); return prepare()})
         .then((value) => {console.log(value); return deliver()})
         .then((value) => {console.log(value); return "TRANSACTION SUCCESSFUL"})
         .then((value) => console.log(value));
*/
//PROMISES PRACTICE (END)===========================================================================

