//Array methods

names = ['ayo', 'bolu', 'caroline', 'ebun', 'folake', 'gbemi', 'hannah']

console.log(names.pop()); //removes last element

console.log(names.shift()); //removes the first element

names.push('ibukun', 'jola'); //adds element to the end of an array
console.log(names);

names.unshift('abigail', 'abidemi'); //add element to the beginning of an array
console.log(names);

console.log(names.splice(2,3)); //first index specifies where to start, second index specifies how many elements to remove
console.log(names);
console.log(names.splice(2,0, 'funke', 'goke' )); //adds elements without removing any elements
console.log(names);

let noALetterArray = names.slice(0,2); //copy elements in any position into a new array
console.log(names); //original array remains unchanged
console.log(noALetterArray); //new array of sliced elements

//Number Methods

const rating = 2.34109;
console.log(Math.round(rating));
console.log(Math.ceil(rating));
console.log(Math.floor(rating));
console.log(Math.random());
console.log('200' + 100); //If you want to do addition, you must convert any strings to numbers
console.log('200' + '100');
console.log(parseInt('200.009') + 100);
console.log(parseFloat('200.009') + 100); //To preserve any decimal values, use parseFloat
console.log(typeof('300.009'));
console.log(Number('300.009'));
console.log(typeof(300.009.toString()));
const total = 10.59675;
console.log(total.toFixed(2)); //rounds the number to 2 places
console.log(2.5555.toPrecision(2));

//DATE & TIME
 const timeNow = new Date(); //The Date object may resemble a string, but it isn't one.
 console.log(timeNow);
 console.log(typeof(timeNow));
 const timeNowString = timeNow.toString();
 console.log(typeof(timeNowString));
 console.log(timeNow.getDay()); //days are represented by zero-indexed numbers
 console.log(timeNow.getDate());
 console.log(timeNow.getMonth());
 console.log(timeNow.getFullYear());

 //specifying a date and time

 let today = new Date();
 console.log(today);
 let doomsday = new Date('"June 30, 2035'); //specifying future date

 //you can use set/change individual elements of a Date object
 today.setFullYear(1960);
 today.setMonth(9);
 today.setDate(1);
 console.log(today);


 //FUNCTIONS

//functions should precede the main code, so when they're called by the main code, they're
//already loaded in memory and ready to go.

function tellTime() {
    let now = new Date();
    let nowHour = now.getHours();
    let nowMinutes = now.getMinutes();
    // console.log(typeof(now));
    return (`The time is ${nowHour}:${nowMinutes}`)
}

console.log(tellTime());
console.log(typeof(tellTime()));

//A global variable is one that's declared in the main body of your code—that is, not inside a function, it is meaningful in every section of your code
//A local variable is one that's declared inside a function.

//SWITCH STATEMENTS

dayOfWeek = 'sat'
switch (dayOfWeek) {
    case 'sat':
        console.log('Yay!');
        break;
    case 'sun':
        console.log('Yay!');
        break;
    case 'fri':
        console.log('TGIF!');
        break;
    default:
        console.log('Shoot me now!');
        break;
}

//WHILE LOOPS

let age = 0;
while (age<18) {
    console.log(age);
    age += 2;
}

//DO WHILE LOOPS
//it always executes that code at least once, no matter what the looplimiter says.

 let ages = 0;
 do {
     console.log(age +5 );
     age +=5;
 } while (age < 18);

 /*
 Generally, the best place for scripts, though, is at the end of the body section
 This guarantees that CSS styling and image display won't get held up while scripts are loading
 A JavaScript file is, like HTML and CSS files, a simple text file. It's just pure JavaScript code.
 */