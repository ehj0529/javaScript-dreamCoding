//1. 계산된 프로퍼티 (Computed property)
// 특정한 값이 선언되지 않을때 사용시 유요함.
let n = "name";
let a = "age";

const user ={
    [n]: 'Mike', //반드시 먼저 선언이 되야함.
    [a]: 30,
    [ 1 + 3]: 5,
};

console.log(user);

function makeObj( key, val){
    // const users = {
    //     [key]: val,
    // }
    // return users;

    return {
        [key]: val,
    }
}

console.log(makeObj('나이','33'));
const obj = makeObj('연령', 29) ;
console.log(obj) ;

// 2. Object.assign()

const user2 = Object.assign({name:'Dave'}, user);
console.log(user2);
user2.name = 'Ellie';
console.log(user2);
console.log(user);

// 3. Object.keys()
const objUser = Object.keys(user);
console.log(objUser);
// 4. Object.values()
const objVal = Object.values(user);
console.log(objVal);
// 5. Object.entries() //key와 value를 둘다 얻고 싶을때.
const objEtr = Object.entries(user);
console.log(objEtr);
// 6. Object.fromEntries()
// 배열을 객체로 생성하는것.
let arr = [
    ['mon','월'],
    ['tue','화'],
];

const result = Object.fromEntries(arr);
console.log(arr) ;