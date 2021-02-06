// typedPassword and whatnot
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


// bank withdrawal, balance, and more

function checkBalance(balance, amount) {
    if (amount < balance) {
        const availableBalance = balance - amount;
        return console.log(`You have successfully withdrawn ${amount}, your available balance is now ${availableBalance}`);
    }
    else {
        return console.log("Boya you should carry gun");
    }
};


// using the 3 diff ways of writing functions 
// Method one


function joinNames(firstname,lastname) {
    let firstname = prompt('Enter your first name');
    let lastname = prompt('Enter your last name');
    return alert(`${firstname} ${lastname}`);
};

// let fullName = joinNames("Success", "Ologunsua");












