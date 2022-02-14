
// Spread Syntax - Object
const item = {type:'pants', size:'M'};
const detail = {price: 20 , made:'Korea', gender:'M'};

//Bad Code 
//주소가 동일 하게 대문에  price를 수정 하면 원래값도 수정됨.
item['price'] = detail.price; 

//수동적 할당.
const newObject = new Object();
newObject['type'] = item.type;
newObject['size'] = item.size;
newObject['price'] = detail.price;
newObject['made'] = detail.made;
newObject['gender'] = detail.gender;

// 수동적 할당.
const newObject2 = {
    type: item.type,
    size: item.size,
    price: detail.price,
    made: detail.made,
    gender: detail.gender,
};

// Good code
// 아래와 같이 하면 두개의 오브젝트가 합쳐짐.
const shirt0 = Object.assign(item, detail);

// Better! Code
//값을 변경할수도 있음.
// org price : 20 -> 40으로 변경함.
const shirt = {...item, ...detail , price: 40};


// Spread Syntax - Array
let fruits = ['수박','복숭아','바나나'];
//fruits.push('사과'); //사과 추가
fruits= [...fruits, '사과']; //추가 .

//fruits.unshift('사과'); //사과 추가
fruits= [ '사과', ...fruits]; //맨앞에 추가.


//fruits.pop('사과'); //사과 빼기

//두개의 배열을 합치기 
const fruits2 = ['멜론','천도복숭아','파인애플'];
let combined = fruits.concat(fruits2) ;
combined =[...fruits, '체리', ...fruits2]; //중간에 값을 추가 하고 싶으면 추가하면됨.



