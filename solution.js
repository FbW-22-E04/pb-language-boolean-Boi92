console.log('--------------')
console.log('1.) ==')

console.log(3 == "3");
console.log (`3` == `"3"`);

console.log('1.)  ==')
console.log (`3` === `"3"`);

console.log('1.) =')

var value = 3;

console.log('2.)')

let myVar = true;

console.log(myVar ? 'good morning' : 'good evening' );

console.log('3.)')

let firstName = '' || 'John' || 0
let emptyStr  = '' && false && 'Hello World'
let zero  = '' || false || 0
let seven = 75 && 'nine' && 7

console.log(firstName,zero,emptyStr,seven);