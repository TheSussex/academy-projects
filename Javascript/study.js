// //Array methods

// names = ['ayo', 'bolu', 'caroline', 'ebun', 'folake', 'gbemi', 'hannah']

// console.log(names.pop()); //removes last element

// console.log(names.shift()); //removes the first element

// names.push('ibukun', 'jola'); //adds element to the end of an array
// console.log(names);

// names.unshift('abigail', 'abidemi'); //add element to the beginning of an array
// console.log(names);

// console.log(names.splice(2,3)); //first index specifies where to start, second index specifies how many elements to remove
// console.log(names);
// console.log(names.splice(2,0, 'funke', 'goke' )); //adds elements without removing any elements
// console.log(names);

// let noALetterArray = names.slice(0,2); //copy elements in any position into a new array
// console.log(names); //original array remains unchanged
// console.log(noALetterArray); //new array of sliced elements


// // NUMBER METHODS

// const rating = 2.34109;
// console.log(Math.round(rating));
// console.log(Math.ceil(rating));
// console.log(Math.floor(rating));
// console.log(Math.random());
// console.log('200' + 100); //If you want to do addition, you must convert any strings to numbers
// console.log('200' + '100');
// console.log(parseInt('200.009') + 100);
// console.log(parseFloat('200.009') + 100); //To preserve any decimal values, use parseFloat
// console.log(typeof('300.009'));
// console.log(Number('300.009'));
// console.log(typeof(300.009.toString()));
// const total = 10.59675;
// console.log(total.toFixed(2)); //rounds the number to 2 places
// console.log(2.5555.toPrecision(2));

// //DATE & TIME
//  const timeNow = new Date(); //The Date object may resemble a string, but it isn't one.
//  console.log(timeNow);
//  console.log(typeof(timeNow));
//  const timeNowString = timeNow.toString();
//  console.log(typeof(timeNowString));
//  console.log(timeNow.getDay()); //days are represented by zero-indexed numbers
//  console.log(timeNow.getDate());
//  console.log(timeNow.getMonth());
//  console.log(timeNow.getFullYear());

//  //specifying a date and time

//  let today = new Date();
//  console.log(today);
//  let doomsday = new Date('"June 30, 2035'); //specifying future date

//  //you can use set/change individual elements of a Date object
//  today.setFullYear(1960);
//  today.setMonth(9);
//  today.setDate(1);
//  console.log(today);


//  //FUNCTIONS

// //functions should precede the main code, so when they're called by the main code, they're
// //already loaded in memory and ready to go.

// function tellTime() {
//     let now = new Date();
//     let nowHour = now.getHours();
//     let nowMinutes = now.getMinutes();
//     // console.log(typeof(now));
//     return (`The time is ${nowHour}:${nowMinutes}`)
// }

// console.log(tellTime());
// console.log(typeof(tellTime()));

// //A global variable is one that's declared in the main body of your code—that is, not inside a function, it is meaningful in every section of your code
// //A local variable is one that's declared inside a function.

// //SWITCH STATEMENTS

// dayOfWeek = 'sat'
// switch (dayOfWeek) {
//     case 'sat':
//         console.log('Yay!');
//         break;
//     case 'sun':
//         console.log('Yay!');
//         break;
//     case 'fri':
//         console.log('TGIF!');
//         break;
//     default:
//         console.log('Shoot me now!');
//         break;
// }

// //WHILE LOOPS

// let age = 0;
// while (age<18) {
//     console.log(age);
//     age += 2;
// }

// //DO WHILE LOOPS
// //it always executes that code at least once, no matter what the looplimiter says.

//  let ages = 0;
//  do {
//      console.log(age +5 );
//      age +=5;
//  } while (age < 18);

//  /*
//  Generally, the best place for scripts, though, is at the end of the body section
//  This guarantees that CSS styling and image display won't get held up while scripts are loading
//  A JavaScript file is, like HTML and CSS files, a simple text file. It's just pure JavaScript code.
//  */

// // OBJECTS

// const plan = {
//     name: 'Basic',
//     price: 3.99,
//     space: 100,
// }
// console.log(plan);
// console.log(typeof(plan));

// // how to add properties to an object
// plan['discount'] = 0.65;
// plan.discountMonths = [3.7,11]; //we can assign an array list to a property
// console.log(plan);

// plan.price = 2.99; // to change the value of an object
// plan.isHeavy = false; // we can also assign a boolean value
// console.log(plan);

// delete plan.space; // to delete a property of an object
// console.log('price' in plan); // check to see if a property of an object exists
// console.log('space' in plan);


// // ARROW FUNCTIONS

// let add1 = function(x, y) { // regular function
//     return x + y;
//   };

// let add2 = (x, y) => { return x + y }; // arrow function
// let add2 = (x, y) => x + y; // Curly brackets aren’t required if only one expression is present


// // function timesTwo(params) {
// //     return params * 2
// //   }
// // console.log(timesTwo(4));

// let timesTwo = params => params * 2;
// console.log(timesTwo(4));

// // OBJECT METHODS

// const plan1 = {
//     name: 'Basic',
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10,
//     discountMonths: [6, 7],
//     calcAnnual: function(percentIfDisc) {
//         let bestPrice = plan1.price;
//         let currDate = new Date();
//         let thisMo = currDate.getMonth();
//         for (let i = 0; i < plan1.discountMonths.length; i++) {
//         if (plan1.discountMonths[i] === thisMo) {
//         bestPrice = plan1.price * percentIfDisc;
//         break;
//         }
//         return bestPrice * 12;
//         }
// }

// // You can attach a function to an object, and the function becomes that object's method


// // MAP, REDUCE, FILTER
// // Map, reduce, and filter are all array methods in JavaScript. 
// // Each one will iterate over an array and perform a transformation or computation. Each will return a new array based on the result of the function.


// // The MAP() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.

// const numbers = [1, 2, 3, 4]
// const doubled = numbers.map(item => item * 2),
// console.log(doubled);

// let officers = [
//     { id: 20, name: 'Captain Piett' },
//     { id: 24, name: 'General Veers' },
//     { id: 56, name: 'Admiral Ozzel' },
//     { id: 88, name: 'Commander Jerjerrod' }
//   ];

// let officersId = officers.map(officers => officers.id);
// console.log(officersId);

// // The FILTER() method takes each element in an array and it applies a conditional statement against it. 
// // If this conditional returns true, the element gets pushed to the output array. 
// // If the condition returns false, the element does not get pushed to the output array.
// const numbers = [1, 2, 3, 4];
// const evens = numbers.filter(item => item % 2 === 0);
// console.log(evens);

// // The REDUCE() method reduces an array of values down to just one value. 
// // To get the output value, it runs a reducer function on each element of the array.
// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce(function (result, item) {
//   return result + item;
// }, 0);
// console.log(sum);

// let pilots = [
//     {
//       id: 10,
//       name: "Poe Dameron",
//       years: 14,
//     },
//     {
//       id: 2,
//       name: "Temmin 'Snap' Wexley",
//       years: 30,
//     },
//     {
//       id: 41,
//       name: "Tallissan Lintra",
//       years: 16,
//     },
//     {
//       id: 99,
//       name: "Ello Asty",
//       years: 22,
//     }
//   ];

//   let totalYears = pilots.reduce(function (accumulator, pilot) {
//     return accumulator + pilot.years;
//   }, 0); 
// console.log(totalYears);
// const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);
// console.log(totalYears);


// // combining the three functions
// const personnel = [
//     {
//       id: 5,
//       name: "Luke Skywalker",
//       pilotingScore: 98,
//       shootingScore: 56,
//       isForceUser: true,
//     },
//     {
//       id: 82,
//       name: "Sabine Wren",
//       pilotingScore: 73,
//       shootingScore: 99,
//       isForceUser: false,
//     },
//     {
//       id: 22,
//       name: "Zeb Orellios",
//       pilotingScore: 20,
//       shootingScore: 59,
//       isForceUser: false,
//     },
//     {
//       id: 15,
//       name: "Ezra Bridger",
//       pilotingScore: 43,
//       shootingScore: 67,
//       isForceUser: true,
//     },
//     {
//       id: 11,
//       name: "Caleb Dume",
//       pilotingScore: 71,
//       shootingScore: 85,
//       isForceUser: true,
//     },
//   ];

// const totalJediScore = personnel
//   .filter(person => person.isForceUser)
//   .map(jedi => jedi.pilotingScore + jedi.shootingScore)
//   .reduce((acc, score) => acc + score, 0);

//     console.log(totalJediScore);


// let x = 123.34;
// console.log(parseInt(x));
// console.log(parseFloat(x));
// console.log(Number.NaN);

// let names = ['ayo', 'bolu', 'caro'];
// names.forEach(element => {
//     x = `${element} is one of my friends` 
//     console.log(x);
// });

// let nums = [0, 1, 3, 4, 5, -1, -8, 9, 0];

// let multiply = nums.map(nums => nums**3);
// console.log(multiply);

// let negatives = nums.filter(nums => nums<0);
// console.log(negatives);

// let sum = nums.reduce((acc, cur) => acc + cur);
// let sum1 = nums.reduce((acc, cur) => acc + cur, 10);

// console.log(sum);
// console.log(sum1);
// console.log(nums.indexOf(-8));
// console.log(nums.lastIndexOf(0));

// //REGEX

// let name = 'Success Ologunsua536 is my is is HEROs';
// let digits = 123456789
// let find = name.search(/s/g);
// let repla = name.replace(/hero/i, 'mom');
// let globalSearch = name.match(/is*/g);

// // console.log(name.match(/[5-8]/g);

// console.log(globalSearch);
// console.log(find);
// console.log(repla);
// let is = /is/;
// console.log(is.test('my uncle was a kind man'));
// console.log(is.exec('my uncle is a kind man'));

