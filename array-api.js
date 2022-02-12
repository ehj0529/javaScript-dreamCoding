'use strict';

// Q1. make a string out of an array
{
    const fruits = ['apple','banana','orange'];
    //이거는 array 끼리 합치는 거임.
    const strFruits = fruits.concat(fruits );
    //이거는 array 의 배열 내용을 string으로 반환 하는거임.
    const result = fruits.join('/'); //구분자입력도 가능함.
    
    console.log(strFruits);
    console.log(result);
    
}

//Q2. make an array out of string
{
    const fruits ='apple, mango, banana, orange';
    const arrFruit = fruits.split(',');
    console.log(arrFruit);
}

//Q3. make this arrayk look like this : [5,4,3,2,1]
{
    const array = [1,2,3,4,5] ;
    const rArray = array.reverse();
    console.log(rArray);
}

//Q4. make new array without the first two elements
{
    const array = [1,2,3,4,5];
    //slice는 리턴을 받고 원래 배열을 수정하지 않음
    //splice는 배열을 변경 하게 됨.
    const sArray = array.slice(2); //splice() --> substring 과 동일함.
    console.log(sArray) ;
}

class Student {
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score =score;
    }
}

const students = [
    new Student('A', 29, true,  45),
    new Student('B', 30, false, 80),
    new Student('C', 28, true,  90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true,  88)
] ;
console.clear();
// Q5. find a student with the score 90
{
    // const result = students.find(function( student, index) {
    //    // console.log(student, index) ;
    //    return  student.score === 90;
    // });
    const result = students.find( (student) => student.score === 90 ) ;
    console.log(result);
}


// Q6. make an array of enrolled students
{
    const result = students.filter( (student) => student.enrolled === true ) ;
    console.log(result);    
}

// Q7. make an array containing only the students' scores
//     result should be: [45, 80, 90, 66, 88]
{
    const result = students.map( (student) => student.score );
    console.log(result);
}

console.clear();
// Q8. check if there is a student with the score lower than 50
{
    //some의 경우 타겟중에 대상이 있으면 리턴
    const result = students.some( (student) => student.score < 50 );
    console.log(result) ;
    //every의 경우 array의 체크 대상이 모두 포함이 되어야 리턴 함.
    const result2 = students.every( (student) => student.score < 50 ) ;
    console.log(result2) ;

}

console.clear();
// Q9. compute students' average score
{
    // reduce 는 값을 누적 함다.
    // const result = students.reduce( (prev, curr) => {
    //     console.log('---------') ;
    //     console.log(  prev) ; // 직전 curr value 
    //     console.log(  curr) ; // 현재 value
    //     return prev+curr.score;
    // } ,0 ); // index를 0부터 시작 , 기본값은 1부터 시작됨. 

    const result = students.reduce ( (prev, curr) => prev + curr.score ,0) ;
    console.log(result/students.length) ;
}

// Q10. make a string containing all the scores
//   result should be : '45, 80, 90, 66, 88'
{
    const result = students
        .map( (student) =>student.score ) // score 만 return;
        .filter( (score) => score > 50)   // score에서 체크
        .join();
    console.log(result) ;
}

console.clear();
// Bonus! do Q10 sorted in ascending order
// result should be : '45, 66, 80, 88 , 90'
{
    const result = students.map((student) => student.score)
        .sort((a,b) => b - a)
        .join();

    console.log(result);    
}