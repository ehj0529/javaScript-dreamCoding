//Looping

const items =[1,2,3,4,5,6];

//1 배열의 변수 중 짝수만 가져오기.
function getAllEvens(items){
    //Good Code 
    return items.filter( (num) => num % 2 === 0 );

    //BAD Code
    // const result = [] ;
    // for(let i = 0; i < items.length ; i++){
    //     if (items[i] % 2 === 0){
    //         result.push(items[i]);
    //     }
    // }
    // return result ;
}

//2. 짝수 배열에 4를 곱하기.
function multiplyByFour(items){
    //Good Code
    return items.map( (num) => num * 4) ;

    //BAD Code
    // for(let i = 0; i < items.length ; i++){
    //     items[i] = items[i]*4;
    // }    
    // return items;
}

//3. 모든 배열의 합을 구하기.
function sumArray(items){
    //Good Code 
    return items.reduce((prev, curr) => prev + curr, 0);

    //BAD Code
    // const sum = 0; 
    // for(let i = 0; i < items.length ; i++){
    //     sum += items[i];
    // }    
    // return sum;
}

const evens1 = getAllEvens(items);
const multiple1 = multiplyByFour(evens1);
const sum1 = sumArray(multiple1);
console.log(sum1) ;

//Good Code 
const evens = items.filter((num) => num % 2 === 0 );
const multiple = evens.map((num) => num * 4 );
const sum = multiple.reduce((a , b) => a + b , 0 );
console.log(sum) ;

//Better Code 
const result = items
        .filter((num) => num % 2 === 0)
        .map((num) => num * 4 )
        .reduce((a , b) => a + b , 0 );
console.log(result) ;
