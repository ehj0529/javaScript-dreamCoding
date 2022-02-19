'use strict';

//선언부 
const user={
    name: 'Mike',
    age: 30,
};

//Bad Code 
//symbol로 showName을 설정함.
const showName = Symbol('Show your name;');
user[showName] = function(){
    console.log(this.name);
};

user[showName](); //이렇게 나만의 메소드를 추가 해서 사용이 가능함.


//key value 보여 주기
for (let key in user){
    console.log(`His ${key} is ${user[key]}.`);
}