// TYPEDPASSWORD AND WHATNOT

// const password = "omo";
// const username = "success";
// const ageLimit = 21;
// const passwordTries = 3;

// const typedUsername = prompt("What is your name?");
// if (typedUsername.toLowerCase() === username) {
//     alert("Please enter your password");
//     const typedPassword = prompt("please enter your password");
//     if (typedPassword.toLowerCase() === password) {
//         alert('You\'re almost there. Click OK to check if your age is valid for this game');
//         const typedAge = prompt("How old are you?");
//         if (typedAge >= ageLimit) {
//             alert("Welcome, you're of age, let's do this!")
//         }
//         else {
//             alert("Oops!, come back few years later.")
//         }
//     } else {
//         alert('Incorrect password, You have 3 more tries.')
//         attempts = 0
//         while (attempts < passwordTries) {
//             alert("Please insert the correct password")
//         }
//         attempts++;
//     }
// } 
// else {
//   alert("I do not know you!");
// }



// BANK WITHDRAWAL, BALANCE AND MORE

// function checkBalance(balance, amount) {
//     if (amount < balance) {
//         const availableBalance = balance - amount;
//         return console.log(`You have successfully withdrawn ${amount}, your available balance is now ${availableBalance}`);
//     }
//     else {
//         return console.log("Boya you should carry gun");
//     }
// };

// USING THE 3 DIFF WAYS OF WRITING FUNCTIONS

// Method One
// let firstname = prompt("Enter your first name");
// let lastname = prompt("Enter your last name");
// function joinNames(firstname, lastname) {
//     let joined = `My name is ${firstname} ${lastname}`;
//     return alert(joined);
// }
// fullName = joinNames(firstname, lastname);

// Method Two
// let fullName = function joinNames(firstname, lastname) {
//     let joined = `My name is ${firstname} ${lastname}`;
//     return alert(joined);
// }
// fullName = joinNames(firstname, lastname);

// Method Three
// let firstname = prompt("Enter your first name");
// let lastname = prompt("Enter your last name");
// let fullName = (firstname, lastname) => {
//     let joined = `My name is ${firstname} ${lastname}`;
//     return alert(joined);
// };
// fullName(firstname, lastname);



// CREATE A FUNCTION THAT ACCEPTS TWO NUMBERS AND RETURNS THE HIGHER OF THE TWO
// let num1 = prompt("Enter the first number");
// let num2 = prompt("Enter the second number");
// function addUp(num1, num2) {
//     if (num1 > num2) {
//         return alert(num1)
//     }
//     else {
//         return alert(num2)
//     }
// };
// addUp(num1,num2);



// CREATE A FUNCTION THAT TAKES IN THE ABOVE OBJECT AS PARAMETER AND 
// RETURNS AN OBJECT WHERE THE NUMBERS FROM THE PARAMETER IDS MULTIPLIED BY 2,
// AND IF THE LENGTH OF THE STRING IS LESSER THAN 5, RETURN IT AS LOWERCASE AND UPPERCASE IF NOT

// let myObject = {
//     name: 'demo',
//     yob: 1990,
//     sch: 'Oxford',
//     gender: 'male',
//     height: 1.56,
//     weight: 59,
//     maritalStatus: 'single',
//     tribe: 'asian',
//     location: 'The abroad',
//     personality: 'Humble',
//     nationality: 'Chinese',
//     useGlasses: true,
//     age: () => 2021 - this.yob
// }

// // for (const key in myObject) {
// //     console.log(myObject[key]);
// // }

// function editObject(obj) {
// newObject = {};
// for (const key in obj) {
//     if (typeof obj[key] === "number") {
//         console.log(newObject[key] = obj[key] * 2);
//         // return newObject[key] = obj[key] * 2;         
//     }
//     else if ((typeof obj[key] === "string") && (obj[key].length < 5)) {
//         console.log(newObject[key] = obj[key].toLowerCase());
//         // return newObject[key] = obj[key].toLowerCase();
//     }
//     else if ((typeof obj[key] === "string") && (obj[key].length >= 5)) {
//         console.log(newObject[key] = obj[key].toUpperCase());
//         // return newObject[key] = obj[key].toLowerCase()
//     }
// }
// }
// editObject(myObject);
// console.log(newObject)



// WRITE A FUNCTION THAT TAKES IN A STRING AND RETURNS TRUE FOR A PALINDROME AND FALSE IF OTHERWISE

// let word = prompt("Enter a word");
// const palindrome = (string) => {
//     let arrOfLetters = string.split("");
//     let reverseOfArray = arrOfLetters.reverse();
//     let joinArray = reverseOfArray.join("");
//     if (joinArray === string) {
//         return alert("It's a palindrome!")
//     }
//     else {
//         return alert("Not a palindrome")
//     }
// }
// palindrome(word);



// CREATE A FUNCTION THAT CHECKS A WORD AND TELL IF IT ENDS WITH A PARTICULAR LETTER
// let word1 = prompt('Enter the word');
// let letter1 = prompt('Enter the letter');

// let endsWith = (word, letter) => {
//     if (word[word.length - 1] === letter) {
//         return alert('Right');
//     }
//     else {
//         return alert('Wrong')
//     }
// }
// endsWith(word1,letter1);



// LOOPING THROUGH AN ARRAY TO MULTIPLY ALL
// const arrayOfNumbers = [1,2,3,4,5,6,7,8,9,0];

// const squares = (array) => {
//     const newArray = [];
//     for (let index = 0; index < array.length; index++) {
//         newArray.push(array[index] **2);
//     }
//     return newArray;
// }

// console.log(squares(arrayOfNumbers));



// CREATE A FUNCTION THAT LOOPS THROUGH AN ARRAY OF NUMBERS AND RETURN ONLY THE ODD NUMBERS 

// const arrayOfNumbers = [1,2,3,4,5,6,7,8,9,0];
// const oddNumbers = (array) => {
//     console.log(array.filter(array => array % 2 === 1));
// };
// oddNumbers(arrayOfNumbers);



// PRACTICING MAP, FILTER AND REDUCE
// const arrayOfNumbers = [1,2,3,4,5,6,7,8,9,0];
// addUpNumbers = (array) => {
//     console.log(array.map(array => array *2));
//     console.log(array.filter(array => array % 2 === 1));
//     console.log(array.reduce((acc, cur) => acc + cur));
// }

// addUpNumbers(arrayOfNumbers);   



// TERNARY OPERATORS
// let age = 12;
// const ageLimit = (age >= 21) ? "old enough" : "too young";
// console.log(ageLimit);



// SWITCH STATEMENTS
// let city = "akure";

// switch (city) {
//     case "lagos":
//         console.log("too rowdy");        
//         break;
//     case "PH":
//         console.log("too expensive");
//         break;
//     default:
//         console.log("nice place to live")
//         break;
// }



// GIVEN AN ARRAY OF NUMBERS, CREATE A FUNCTION THAT RETURNS AN OBJECT THAT CONTAINS 3 KEYS;
// % OF NEGATIVE NUMBERS, % OF POSITIVE NUMBERS AND % OF ZEROS.
// RETURN THE %s IN 2 DECIMAL PLACES
// const arr1 = [-1, 0, 1];

// sortNumbers = (array) => {
//     const newObj = {};
//     newObj['positives'] = (array.filter(array => array > 0).length / array.length * 100).toFixed(2);
//     newObj['negatives'] = (array.filter(array => array < 0).length / array.length * 100).toFixed(2);
//     newObj['zeros'] = (array.filter(array => array === 0).length / array.length * 100).toFixed(2);
//     console.log(newObj);     
// } 
// sortNumbers(arr1);
// FOR EACH METHOD
// sortNumbers = (array) => {
//     const newObj = {};
//     array.forEach(el => {
//         newObj['positives'] = (array.filter(array => array > 0).length / array.length * 100).toFixed(2);
//         newObj['negatives'] = (array.filter(array => array < 0).length / array.length * 100).toFixed(2);
//         newObj['zeros'] = (array.filter(array => array === 0).length / array.length * 100).toFixed(2);
//     })
//     console.log(newObj);     
// } 
// sortNumbers(arr1);



// BUILD A FUNCTION THAT RETURS HOW MUCH A RIDE WILL COST BEFORE YOU REQUEST FOR IT.
// const rideTime1 = 15;
// const rideDistance1 = 9;
// const costPerMinute1 = [0.2, 0.34, 0.35, 0.45, 1];
// const costPerMile1 = [1.1, 1.8, 1.9, 1.7, 5];

// const rideTime2 = 50;
// const rideDistance2 = 17;
// const costPerMinute2 = [0.123, 0.35, 0.78, 1.6, 1.6, 3, 2];
// const costPerMile2 = [1.1, 1.8, 2.4, 1.8, 2.6, 1.5, 2.45];

// const rideTime3 = 30;
// const rideDistance3 = 7;
// const costPerMinute3 = [0.2, 0.35, 0.4, 0.45];
// const costPerMile3 = [1.1, 1.8, 2.3, 3.5];

// fareEstimator = (costPerMinute, rideTime, costPerMile, rideDistance) => {
//     let fare = [];
//     for (let index = 0; index < costPerMinute.length; index++) {
//         let cost = ((costPerMinute[index] * rideTime) + (costPerMile[index] * rideDistance));
//         fare.push(cost.toFixed(2));   
//     }
//     console.log(fare);
// }

// fareEstimator(costPerMinute1, rideTime1, costPerMile1, rideDistance1);
//FOR EACH METHOD
// const costPerMile1 = [1.1, 1.8, 1.9, 1.7, 5];

// fareEstimator = (costPerMinute, rideTime, costPerMile, rideDistance) => {
//     let fare = [];
//     costPerMinute.forEach((el, i) => {
//         let cost = ((el * rideTime) + (costPerMile[i] * rideDistance));
//         fare.push(cost.toFixed(2));
//     })
//     console.log(fare);
// }

// fareEstimator(costPerMinute1, rideTime1, costPerMile1, rideDistance1);



// GIVEN A YEAR, RETURN THE CENTURY IT IS IN
// const centuryFromYear = (year) => {
//     let century = Math.ceil(year/100)
//     console.log(century);
// }
// centuryFromYear(1905);
// centuryFromYear(1700);


//  STOPPED HERE


// GIVEN AN ARRAY OF INTEGERS, FIND THE PAIR OF ADJACENT ELEMENTS
// THAT HAS THE LARGEST PRODUCT AND RETURN THAT PRODUCT
const arr1 = [5, 1, 2, 3, 1, 4];
const adjacentElementsProduct = (array) => {
    // array.forEach((el, i) => {
    //     newArr = [];
    //     newArr.push(array[i] * array[i-1])
    // });
    for (let index = 0; index < array.length; index++) {
        newArr.push(array[index] * array(index))
        
    }
    console.log(newArr);
}
console.log(adjacentElementsProduct(arr1));


// GIVEN AN ARRAY OF INTEGERS REPRESENTING THE COLOR OF EACH SOCK, 
// DETERMINE HOW MANY PAIRS OF SOCKS WITH MATCHING COLORS THERE ARE
// const n = 7
// const arr1 = [1,2,1,2,3,2];

// const sortSocks = () => {
//     let sortedArray = arr1.sort();
//     console.log(sortedArray);
//     let pairs = 0;
//     sortedArray.forEach(el => {
//         if (sortedArray[el] === sortedArray[el+1]) {
//             pairs+=1;
//             i += 1;
//             console.log(pairs);
//         } else {
//             i = i +1
//         }
//     })
//     console.log(pairs)
// };
// sortSocks(arr1);

//regex always return true or false, it's a boolean function
// {} is used to specify the no of things we want, we put the no inside the braces
//boundaries set endpoints and they're always in square brackets
const regEx = /[a-zA-Z0-9]/ 
const regEx1 = /t*/
// const regEx = /[a-zA-Z0-9]/ 

// const regNum = /[0-9]/
// // characters . * + s i d {} ^ |
// // const new = 
// const str = "operation002";
const password = "2233";


console.log(regEx1.test())


// // CREATE A FUNCTION THAT CALCULATES THE MIN NUMBER OF ADDITIONAL STATUES NEEDED TO MAKE AN ARRAY OF STATUES CONSECUTIVE

// const makeArrayConsecutive = (array) => {
//     let sortedArray = array.sort();
//     array.forEach(el => {
    
//     })
//     console.log(sortedArray);
// }
// makeArrayConsecutive([6,2,3,8]);

// // CREATE A FUNCTION THAT FINDS THE BEST CAR YOU CAN AFFORD USING YOUR $20 DISCOUNT
// const fancyRide = (l, fares) => {

// }

// // FIND THE AREA OF A POLYGON FOR A GIVEN N
// const shapeArea = (n) => {

// } 







