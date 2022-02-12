'use strict' ;

// async & await
// clear style of using promise 

// 1. async
// function 앞에 async 를 추가 하면 자동으로 promis가 적용 된다.
// resolve, reject 구문 불필요.

//promise를 이용하는 경우 예제
function fetchUserP() {
    //do network request in 10 secs.....
    return new Promise( (resolve, reject ) => {
        resolve('ellie') ;
    }) ;
}

//async를 이용하는 예제 위와 동일
async function fetchUserA(){
    return 'ellie async';
}

const user = fetchUserP();
user.then(console.log);
console.log(user) ;

const usera = fetchUserA();
usera.then(console.log);
console.log(usera) ;


console.clear();
// 2. await -- 이것은  async안에서만 사용이 가능함.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(1500);
    return '사과';
}

async function getBanana(){
    await delay(1400);
    //throw 'error';
    return '바나나';
}


//promise를 이용하는 경우 아래와 같이
function pickFruits() {
    return getApple().then( apple => {
        return getBanana().then( banana => `${apple} + ${banana}` )

    });
}

//async로 이용하게 되면 에러는 try catch를 사용할수 있음.
async function pickFruitAsync() {
    // try {
        //아래의 코딩처럼 하면 시리얼하게 실행됨. 병렬처리가 필요함.
        /*
        const apple = await getApple();
        const banana = await getBanana();
        */

        //promise의 경우 선언과 동시에 실행 되므로 
        const applePromise = getApple();
        const bananaPromise = getBanana();
        const appleP = await applePromise;
        const bananaP = await bananaPromise;
        return `${appleP} + ${bananaP}` ;    
    // } catch (error) {
    //     return console.log(error);        
    // }

}

pickFruitAsync().then(console.log) ;

// 완전 심플 모드 promise
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
            .then(fruits => fruits.join(' /+/ ')
            );
}

pickAllFruits().then(console.log) ;

//먼저 리턴 되는것만 가져오기

function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]) ;
}
pickOnlyOne().then(console.log); 

