// TYPEDPASSWORD AND WHATNOT

// const password = "omodaddy";
// const username = "success";

// typedUsername = prompt("What is your name?")
// if (typedUsername.toLowerCase() === username) {
//     alert("Please enter your password");
//     const typedPassword = prompt("please enter your password");
//     if (typedPassword.toLowerCase() === password) {
//         alert('You\'re almost there. Click OK to check if your age is valid for this game');
//         const typedAge = prompt("How old are you?");
//         if (typedAge >= 21) {
//             alert("Welcome, you're of age, let's do this!")
//         }
//         else {
//             alert("Oops!, come back few years later.")
//         }
//     } else {
//         alert('Incorrect password, try again!')
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
// },

// function transformObj(obj) {
//     if (typeof(obj.value) === Number) {
//         return console.log(obj.value * 2);
//     }
//     if ((typeof(obj.value) === String) && (obj.value.length < 5)) {
//         return console.log(obj.value.toLowerCase());
//     }
//     if ((typeof(obj.value) === String) && (obj.value.length > 5)) {
//         return console.log(obj.value.toUpperCase());
//     }
// }
// transformObj(myObject);

// CREATE A FUNCTION THAT CHECKS A WORD AND TELL IF IT ENDS WITH A PARTICULAR LETTER
let word1 = prompt('Enter the word');
let letter1 = prompt('Enter the letter');

let endsWith = (word, letter) => {
    if (word[word.length - 1] === letter) {
        return alert('Right');
    }
    else {
        return alert('Wrong')
    }
}
endsWith(word1,letter1);










