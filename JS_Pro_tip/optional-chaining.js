// Optional Chaining

const bob ={
    name: 'Julia',
    age: 20,
};
const anna = {
    name: 'Julia',
    age: 20,
    job:{
        title: 'Software Engineer',
    },
};

// Bad Code
//직책을 표헌하는 함수.
function displayJobTitle(person){
    if(person.job && person.job.title) {
        console.log(person.job.title) ;
    }
}

// Good code
// && 체크 구문을 ?으로 대체 가능함. 동일한 object명은 사용하지 않아도 됨.
function displayJobTitle(person){
    if(person.job?.title){
        console.log(person.job.title);
    }
}

// Good code 2
function displayJobTitle(person){
    const title = person.job?.title ?? 'No job Yet !!' ;
    console.log(title) ;
}