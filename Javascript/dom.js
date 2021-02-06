// The Document Object Model is a programming API for HTML and XML documents. It deines the logical structure of documents and the way a document is accessed and manipulated. 

// alert('Hello');
// document.title = 'Success';

// let k = document.getElementsByTagName('label');
// k[0].innerHTML = '<b>Weller</b>';
// let j = document.getElementById('test');
// let i = document.getElementsByClassName('test');
// let l = document.querySelector('#test');
// let m = document.querySelector('.test');
// let n = document.querySelectorAll('div');

// // difference between querySelectorAll and TagName: qSA has proto of NodeList and array methods/functions can be carried out on it but TagName returns proto of HTML Collection and we need a Array.from()

// // querySelector returns the first occurence of the element passed in

// // Proto of i and k is HTML Collection [forEach wouldn't work as shown below]

// // document.getElementById('test').innerHTML
// // document.getElementById('test').innerHTML
// // document.getElementById('test').textContent
// // document.getElementById('test').innerText

// // To convert proto to Array
// let ij = Array.from(k); 

// ij.forEach((el) => {
//     el.style.color = 'blue';
// });

// function borderSizer(n, color) {
//     return `${n}px solid grey ${color}`
// }

// // for (let i = 0; i < k.length; i++) {
// //     const element = array[i];
// //     k[i].style.borderBottom = '1px solid green';
// // }

// // for (let i = 0; i < k.length; i++) {
// //     k[i].style.borderBottom = borderSizer(i + 1, blue);
// // }
// console.log('array', i);
// console.log('single', j);

 
// let newImage = 'assets/Logo.svg';
// // let newImage = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fledgerinsights.com%2Fblockchain-sugar-trading-platform-launches-in-dubai%2F&psig=AOvVaw16x0UDDbY9aEkHeGUva07p&ust=1612273135811000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDImM_nyO4CFQAAAAAdAAAAABAD';
// console.log(newImage);
// let imageHolder = document.querySelector('.js-class');
// console.log(imageHolder);
// imageHolder.removeAttribute('src');
// imageHolder.setAttribute('src', newImage);


// // appending, prepending and creating new element

// let newTag = document.createElement('h1')
// newTag.innerHTML = '<b>Hello from .js</b>'

// let newerTag = document.createElement('h2');
// newerTag.innerHTML = '<b>Hello from here</b>'; 

// console.log(newTag)
// document.body.append(newTag);
// document.body.prepend(newTag);

// const newDiv = document.createElement('div');
// newDiv.appendChild(newTag);
// const imageDiv = document.querySelector('.js-clazz');
// console.log(imageDiv);
// imageDiv.prepend(newDiv);


// //removing/deleting  
// // newDiv.removeChild(newTag);
// // newDiv.hasChildNodes(newTag)

// imageDiv.removeChild(imageDiv.firstElementChildChild.nextElementSibling);
// // will be previousChild if before

// // to get all the styles of an element:
// console.log(window.getComputedStyle(j));


// const myEmail = 'omodaddy@gmail.com';
// const myPassword = 'omodaddy';

// let email = document.getElementById('email');
// let password = document.getElementById('password');

// // error display elements
// let email_error = document.getElementById('email_error');
// let password_error = document.getElementById('password_error');

// // events listeners
// email.addEventListener('blur', validateEmail, true);
// password.addEventListener('blur', validatePassword, true);

// // validation functions
// function validateForm() {
//   // validate email
//   if (email.value !== myEmail) {
//     email.style.border = "1px solid red";
//     document.getElementById('email_div').style.color = "red";
//     email_error.textContent = "Wrong input! Please enter the correct email";
//     email.focus();
//     return false;
//   }
//   // validate password
//   if (password.value.length < 7) {
//     password_error.textContent = "Password cannot be less than 7 characters";
//     password.focus();
//     return false;
//   }
//   if (password.value !== myPassword) {
//     password_error.textContent = "Invalid input, please enter the correct password";
//     password.focus();
//     return false;
//   }
// }
  
// // event handler functions
// function validateEmail() {
//   if (email.value === myEmail) {
//   	email_error.innerHTML = "";
//   	return true;
//   }
// }
// function validatePassword() {
//   if (password.value === myPassword) {
//   	password_error.innerHTML = "";
//   	return true;
//   }
// }

// function displayNewPage() {
//   document.getElementById('user-form').formTarget = "_self";
//   document.getElementById('form-div').innerHTML = "Congrats! You've successfully logged into your account.";
// }

// const alertMe = () => alert('cap');
// const alertYou = () => alert('click');

// const cap = document.querySelector('#cap');
// const clickMe = document.querySelector('#click');

// cap.addEventListener('click', alertMe);
// clickMe.addEventListener('click', alertYou);

// let formObject = {};
// let firstName = document.getElementById('fname');
// let lastName = document.getElementById('lname');
// let age = document.getElementById('age');
// let email = document.getElementById('email');
// let button = document.getElementById('submit-btn');
// let form = document.getElementById('form');
// formObject['First Name'] = firstName;
// formObject['Last Name'] = lastName;
// formObject['Age'] = age;
// formObject['Email Address'] = email;

// // function displayInput() {
// //         document.getElementById('display').innerHTML = formObject;
// //     }
// console.log(formObject);
// // button.addEventListener('submit', displayInput());

//4/2/2021

// const button = document.querySelector('#btn');

// button.onclick = function printSomething () {
//   alert('Testing testing');
// };

// function printSomething () {
//   alert('Testing testing');
// };

// button.addEventListener('click', printSomething);