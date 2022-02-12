'use strict';
// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2 ];

// 2. Index position
const fruits=['사과','바나나'];
console.log(fruits) ;
console.log(fruits.length);
console.log(fruits[0]) ;

// 3. loop fruits
for (let i =0 ; i < fruits.length ; i++){
    console.log('1:'+fruits[i]);
}

for ( let fruit of fruits){
    console.log('2:'+fruit);
}

//c. forEach
fruits.forEach(function(fruit, index, array){
    console.log('3:'+fruit) ;
});

fruits.forEach( (fruit, index , array) =>  console.log(fruit, index, array)) ;

//4. addtion deletion copy
// push : add on titem to the end
fruits.push('🍕','🍔') ;
console.log(fruits) ;

// pop
// remove an item form the end
fruits.pop();
fruits.pop();
console.log(fruits) ;

// unshift: add on item to the benigging
fruits.unshift('🍕','🍔');
console.log(fruits) ;
// shift : remove an item from the benigging
fruits.shift();
console.log(fruits) ;

// note!! shift, unshift are slower then pop, push
// splice : remove an item by index position
fruits.splice(1,1,'add1','add2'); // start, end // 삭제이후 추가가 가능함.
console.log(fruits);

//combine two arrays
// 배열을 합칠수 있음 자바도 될걸?
//concat
const fruits2 = [ 'arrayS1','arrayS2','arrayS3'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. array Searching
//indexOf : find the first index
console.clear();
console.log(fruits); 
console.log(fruits.indexOf('add1')) ;
console.log(newFruits.indexOf('arrayS')) ;
//includes
console.log(newFruits.includes('arrayS2')) ;
console.log(newFruits.includes('arrayS5')) ;

//lastIndexOf
console.clear();
console.log(newFruits.lastIndexOf('arrayS5')) ;
