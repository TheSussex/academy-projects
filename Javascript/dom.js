// The Document Object Model is a programming API for HTML and XML documents. It deines the logical structure of documents and the way a document is accessed and manipulated. 

// alert('Hello');
document.title = 'Ruqayaah';

let k = document.getElementsByTagName('label');
k[0].innerHTML = '<b>Weller</b>';
let j = document.getElementById('test');
let i = document.getElementsByClassName('test');
let l = document.querySelector('#test');
let m = document.querySelector('.test');
let n = document.querySelectorAll('div');

// difference between querySelectorAll and TagName: qSA has proto of NodeList and array methods/functions can be carried out on it but TagName returns proto of HTML Collection and we need a Array.from().

// querySelector retrns the first occurence.


// Proto of i and k is HTML Collection [forEach wouldn't work as shown below]


// document.getElementById('test').innerHTML
// document.getElementById('test').innerHTML
// document.getElementById('test').textContent
// document.getElementById('test').innerText

// To convert proto to Array
let ij = Array.from(k); 

ij.forEach((el) => {
    el.style.color = 'blue';
});

function borderSizer(n, color) {
    return `${n}px solid grey ${color}`
}

// for (let i = 0; i < k.length; i++) {
//     const element = array[i];
//     k[i].style.borderBottom = '1px solid green';
// }

// for (let i = 0; i < k.length; i++) {
//     k[i].style.borderBottom = borderSizer(i + 1, blue);
// }
console.log('array', i);
console.log('single', j);


let newImage = 'assets/Logo.svg';
// let newImage = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fledgerinsights.com%2Fblockchain-sugar-trading-platform-launches-in-dubai%2F&psig=AOvVaw16x0UDDbY9aEkHeGUva07p&ust=1612273135811000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDImM_nyO4CFQAAAAAdAAAAABAD';
console.log(newImage);
let imageHolder = document.querySelector('.js-class');
console.log(imageHolder);
imageHolder.removeAttribute('src');
imageHolder.setAttribute('src', newImage);


// appending, prepending and creating new element

let newTag = document.createElement('h1')
newTag.innerHTML = '<b>Hello from .js</b>'

let newerTag = document.createElement('h2');
newerTag.innerHTML = '<b>Hello from here</b>'; 

console.log(newTag)
document.body.append(newTag);
document.body.prepend(newTag);

const newDiv = document.createElement('div');
newDiv.appendChild(newTag);
const imageDiv = document.querySelector('.js-clazz');
console.log(imageDiv);
imageDiv.prepend(newDiv);


//removing/deleting  
// newDiv.removeChild(newTag);
// newDiv.hasChildNodes(newTag)

imageDiv.removeChild(imageDiv.firstElementChildChild.nextElementSibling);
// will be previousChild if before

// to get all the styles of an element:
console.log(window.getComputedStyle(j));