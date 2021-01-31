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