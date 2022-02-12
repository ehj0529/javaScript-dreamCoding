'use strict';
// Obejcts
// one of the JavaScript's data types.
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object

const name = 'ellie';
const age = 4;
print(name, age);

function print(name , age){
    console.log(name);
    console.log(age);
}

// 1. Literals and properties
const obj1 = {};  //'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person){
    console.log(person.name) ;
    console.log(person.age);
}
const ellie = {name : 'ellie', age : 20};
print(ellie);

// with JavaScript magic ( dynamically typed language )
// can add properties later
ellie.hasJob = true;
delete ellie.hasJob;

// 2. Computed properties
console.log(ellie.name); // 일반적으로
console.log(ellie['name']); // 실시간으로 값을 받고 싶을 때.

ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key){
    console.log(obj[key]) ;
}

printValue(ellie, 'name') ;
printValue(ellie, 'age') ;

// 3. Property value shorthand
const person1 = {name: 'bob', age : 10};
const person2 = {name: 'steve', age : 11};
const person3 = {name: 'dave', age : 12};
const person4 = new Person('ellie', 30);
console.log(person4);
console.log(person4.name);

// 4. Constructor Function
function Person(name, age){
    this.name = name;
    this.age = age;
}

// 5. in operator : property exsitenct check(key in obj)
console.log( 'name' in ellie) ;
console.log( 'age' in ellie) ;
console.log( 'random' in ellie) ;
console.log( ellie.random) ;
console.clear();

// 6. for..in va for..of
for ( let key in ellie){
    console.log(key) ;
}

// for (value of iterable)
const array = [2,4,5,6,9];
for( let value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2. obj3 ...])

const user = {name: 'ellie', age : '20'};
const user2 =user; // 주소값이 복사됨.
user2.name = 'dave';
console.log(user); // 이름이 변경됨
user.name = 'dave-ellie';

// old way
const user3 ={};
for( let key in user){
    user3[key] = user[key];
}
user3.name = 'key!!';
console.log(user3);
console.log(user2);

const user4 ={};
Object.assign(user4, user);
const user5 = Object.assign({}, user);
console.log(user4);
console.log(user5);

// another example
const fruit1 = {color : 'red'} ;
const fruit2 = {color : 'blue', size : 'big'} ;
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);

