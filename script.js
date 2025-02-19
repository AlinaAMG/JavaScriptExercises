// Exercises
// 1) Variables and Conditionals:
const age = 38;
if (age >= 18) {
  console.log('You are old enough to vote!!');
} else {
  console.log("You can't vote yet!!");
}

const userName = prompt('What is your name?');
if (userName.trim() === 'John') {
  console.log('Hello John!');
} else {
  console.log('You are not John.');
}

// 2)Functions

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(12, 10));

console.log(add(8, 20));

// function reversedString(str) {
//     let reversedString = "";
//     //for loop
//     for (let i = str.length-1; i >= 0; i--){
//         reversedString = reversedString + str[i];
//     }
//     return reversedString;
// }
//  the same approach only with array methods

function reversedString(str) {
  return str.split('').reverse().join('');
}

console.log(reversedString('Alina'));
console.log(reversedString('good morning'));

// Array and Loops
// 1)
const fruits = ['avocado', 'appel', 'mango', 'ananas', 'blueberry'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// OR
for (let fruit of fruits) {
  console.log(fruit);
}

// 2)
function averageNumbers(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total / numbers.length;
}
console.log(averageNumbers([5, 5]));

// 3)
function largestNumber(num) {
  let largeNum = num[0];
  for (let i = 1; i < num.length; i++) {
    if (num[i] > largeNum) {
      largeNum = num[i];
    }
  }
  return largeNum;
}

const array = [3, 6, 9, 20];
console.log(largestNumber(array));

// 4)
const words = ['i', 'want', 'to', 'go', 'on', 'holiday', '!'];
let string = '';
for (let i = 0; i < words.length; i++) {
  string += words[i] + ' ';
}
console.log(string);

// 5)

function checkName(names, name) {
  //    Use the includes() array method
  return names.includes(name);
}

const arrNames = ['Alina', 'John', 'Jan', 'Marco', 'Julia'];
console.log(checkName(arrNames, 'Alina'));
console.log(checkName(arrNames, 'Josh'));

// 6)

for (let i = 1; i <= 21; i++) {
  if (i % 2 === 0) {
    console.log('Even number:'+ i);
  } else {
    console.log('Odd number');
  }
}

// 4)Objects
// 1)
const book = {
  title: 'Harry Potter and the Chamber of Secrets',
  author: 'J.K.Rowling',
  year: 1997,
};
console.log(book);

// 2)

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}
function printInfo(personInfo) {
  console.log(
    `Name: ${personInfo.name}, Age: ${personInfo.age}, Gender: ${personInfo.gender}`
  );
}

const person1 = new Person('Gina', 33, 'female');
const person2 = new Person('John', 29, 'male');
printInfo(person1);
printInfo(person2);

// 5)Objects as Classes
// 1)

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(
      `I am  trying to start the ${this.make} ${this.model} from year ${this.year}`
    );
  }
}

class Drive extends Car {
  drive() {
    console.log(`i am driving a ${this.model}`);
  }
}

const car1 = new Drive('Tesla', 'model S', 2024);
car1.start();
car1.drive();

// 6) Window Object
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
    window.alert("The button was clicked!")
})

function greeting() {
    const name = window.prompt("What is your name?");
    window.alert(`Welcome ${name}`);
    
}
greeting();

// 7) DOM- Manipulation

// 1)
const div = document.querySelector(".dom-manipulation");
const changeText = document.querySelector(".change-text");

changeText.addEventListener("click", function () {
    div.textContent = "I am studying DOM-manipulation";
})

// 2)
const addItems = document.querySelector(".add-items");
const items = document.querySelector(".items");
addItems.addEventListener("click", function () {
    const li = document.createElement("li");
    li.textContent = "Cleaning";
    items.appendChild(li);
})

// 3)

const img = document.querySelector(".img");
const btnChangeImg = document.querySelector(".change-image");
btnChangeImg.addEventListener("click", function () {
    img.src="https://plus.unsplash.com/premium_photo-1669750817438-3f7f3112de8d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D"
})
