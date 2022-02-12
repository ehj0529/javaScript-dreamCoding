'use strict';
//Funtion
// - funamental builder bolck in the program
// - subprogram can be used mulitple times
// - performs a task or calculates a value

//1. Function declaration
// function name(param1, param2) {body ... return ;}
// one funtion === one thing
// nameing : doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// funtion is object in JS


function printHello(){
    console.log('hello !!');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference

function changeName(obj){
    obj.name = 'coder';
}

const ellie = {name : 'ellie'} ;
changeName(ellie) ;
console.log(ellie) ;

// 3. Default parameters (added in ES6 )
function showMessage(message, from = 'unKwnon'){ 
    console.log(`${message} by ${from}`);
}

showMessage('Hi!!');

// 4. Rest parameters ( added in ES6)
function printAll(...args) {
    console.log(`args.length : ${args.length}`)
    for ( let i = 0 ; i < args.length; i++){
        console.log(args[i]) ;
    }

    for ( const arg of args){
        console.log(arg ) ;
    }

    args.forEach((arg) => console.log(arg)) ;


}

printAll('dream','coding','ellie') ;


// 5. Local scope
let globalMessage = 'global'; //global variable
function printMessage(){
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);

    function printAnother(){
        console.log(message) ;
        let childMessage = 'child Hello!!' ;
        console.log( message = childMessage) ;
    }
    
    printAnother();
}

printMessage();


function sum(a, b) {
    return a + b ;
}

const result = sum(1,2);
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, early exit
// bad case
function upgradeUser(user){
    if(user.point > 10){
        //loop upgrade logic...
    }
}
//good Case
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    //long upgrade logic....
}

const print = function(){
  //anonymous function
  console.log('print') ;  
};
print();

const printAgain = print ;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,4));


// 2.Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
} 

const printYes = function(){
    console.log('Yes!!');
};

const printNo = function(){
    console.log('No~');
};

randomQuiz('wrong',printYes, printNo);
randomQuiz('love you', printYes, printNo) ;

//Arrow function
// always anonymous
const simplePrint = () => console.log('simplePrint!!') ;
const add = (a,b) => a+b;
const simpleNultiply = (a,b) => {
    //do something more
    return a * b;
};

// IIFE : immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();



// Fun Quiz time ❤
// functino calculate(command, a, b)
// commond: add, substract, divide, multiply, remainder

(function calculate(command, a, b){
    switch(command){
        case '+':
           console.log(`a + b = ${a+b}`);
           break;
        case '-':
            console.log(`a - b = ${a-b}`);
            break;
        case '/':
            console.log(`a / b = ${a/b}`);
            break;
        case '*':
            console.log(`a * b = ${a*b}`);
            break;
        case '%':
            console.log(`a % b = ${a%b}`);
            break;
        default :
            console.log('none calculate!!');
            break;
                       
     }
})();