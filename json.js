'use strict' ; //엄격모드 

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json) ;

json = JSON.stringify(['apple','banana','orange']) ;
console.log(json) ;

const rabbit = {
    name : 'tori',
    color : 'white' ,
    size : null,
    birthDate : new Date(),
    jump: () => {
        console.log(`${name} can jump!!`)
    },
} ;

json = JSON.stringify(rabbit); //전체를 파싱
console.log(json) ;
json = JSON.stringify(rabbit, ['name','birthDate']); //입력된 프로퍼티만 파싱 
console.log(json) ;

json = JSON.stringify(rabbit, (key , value ) => {  //콜백 함수를 통한 제어
    console.log(`key : ${key}, value : ${value}`);
    return value; // 그냥 리턴
    // return key === 'name' ? 'ellie' : value; // value를 변경 리턴
    // console.log(value);
});  
console.log(json) ;


// 2. JSON to Object
// parse (json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json,(key, value) => {
    console.log(`key : ${key}, value : ${value}`);
    return key === 'birthDate' ? new Date(value) : value ;
});

console.log(obj) ;
rabbit.jump();

console.log(rabbit.birthDate.getDate()) ;
console.log(obj.birthDate.getDate()) ;




