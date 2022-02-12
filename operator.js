'use strict';

// String concatenation
console.log( 'my' + ' cat ');
console.log( '1' + 2);
console.log( `string literals: 
....
1 + 2 = ${1 + 2 } `);
console.log("ellie's \n \tbook") ;

console.log( 1 + 1); //add
console.log( 1 - 1); //substract
console.log( 1 / 1); //divide
console.log( 1 * 1); //muliply
console.log( 5 % 2); //remainder
console.log( 2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter  = 2 ;
const preIncrement = ++counter;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);
const postIncrement = counter++;
console.log(`postIncrement : ${postIncrement}, counter : ${counter}`);

//...

// 6. Logical operlators : || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 > 2;

// || (or), find the first truthy value
console.log(` or : ${value1 || value2 || check() }`) ;

// && (and), find the first falsy value
console.log(` and : ${value1 || value2 || check() }`) ;

function check() {
    for(let i = 0; i< 10 ; i++) {
        //wasting time
        console.log('😂😢');
        console.log('for loop in');

    }
    return true;
}

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

const ellie1 = {name : 'ellie'} ;
const ellie2 = {name : 'ellie'} ;
const ellie3 = ellie1;

console.log( 'object console.log') ;
console.log( ellie1 == ellie2) ;
console.log( ellie1 === ellie2) ;
console.log( ellie1 === ellie3) ;

// equality - puzzler
console.log( 0 == false) ;// true
console.log( 0 === false ) ;//false
console.log('' == false) ; //true
console.log('' === false) ; // false
console.log( null == undefined) ; // true
console.log( null === undefined ); //false

// 8. Conditional operators: if
// if, esle if , else

const eName = 'ellie';
if( eName === 'ellie'){
    console.log('Welcome, Ellie!')
} else if (eName ==="coder"){
    console.log( 'You ar amazing coder') ;
} else {
    console.log('unKwnon')
}

// 9. Ternary opertor : ?
// condition ? value1 : value 2;
console.log(eName === 'ellie' ? 'Yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type check in TS
const browser = 'IE';

switch (browser){
    case 'IE':
        console.log('go away!') ;
        break;
    case 'Chrome' :
    case 'Firefox' :
        console.log('love you !');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// shile loop, while the condition is truthy,
// body code is executed
let i =3;
while(i > 0){
    console.log(`while: ${i}`);
    i--;
}

//do while loop, body code is executed first,j
// then check th condition.

do{
    console.log(`do while : ${i}`);
    i--;
} while(i > 0);


//for loop , for( begin; condition ; step)
for (i = 3 ; i > 0 ; i--){
    console.log(`for : ${1}`) ;
}

for (let ii = 3 ; ii > 0 ; ii= ii-2 ){
    //inline variable declaration
    console.log(`inline variable for : ${ii}`);
}

//nested loops
for (let i = 3 ; i > 0 ; i= i-2 ){
    for (let j = 3 ; j > 0 ; j =  j -2 ){
        console.log(`i : ${i}, J : ${j}`);
    }
}

for( let i = 0 ; i < 11 ; i++){
    if( (i % 2) === 0 )
        console.log( `q1 : ${i}`) ;

    if(i > 8){
        console.log( `q2 : ${i}`) ;
        break;    
    }
}

