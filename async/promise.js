'use strict';

//Promise is a JavaScript object for asynchronous operation.
// state : pending -> fulfilled or rejected
// Producer vs Comsumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
// promise생성 즉시 콜백함수가 수행됨.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something') ;
    setTimeout( () => {
        resolve('ellie');  //정상리턴의 경우
        //reject(new Error('no Network')) ; // 실제 에러발생
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise
.then( value => { // 정상 리턴이면 원래 여기로 수행됨. resolve;
    console.log(value); 
})
.catch(error => { //reject의 경우 여기로 수행됨.
    console.log(error) ;
})
.finally(()=> {
    console.log('finally !!')
});

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(()=> resolve(1),1000);
});

fetchNumber
.then(num => num *2)
.then(num => num *3)
.then(num => {
    return new Promise( (resolve, reject) => {
        setTimeout( ()=> resolve(num -1),1000);
    });
})
.then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
 new Promise( (resolve, reject) => {
     setTimeout( ()=> resolve('닭'),1000 );
 });

 const getEgg = hen =>
 new Promise( (resolve, reject) => {
    // setTimeout( ()=> resolve(`${hen} => 달걀 `),1000 );
    setTimeout( ()=> reject(new Error(`error ${hen} => 달걀 `)),1000 );
});

 const cook = egg =>
 new Promise( (resolve, reject) => {
     setTimeout( ()=> resolve(`${egg} => 후라이 `),1000 );
 });

getHen()
 .then(hen => getEgg(hen))
 .catch( error => {
    return ' => 빵';
}) .then(egg => cook(egg))
 .then(meal => console.log(meal));

//위와 동일한거
getHen()
.then(getEgg)
.catch( error => {
    return ' => 빵';
})
.then(cook)
.then(console.log)
.catch(console.log);