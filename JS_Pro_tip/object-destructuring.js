//Object Destructuring

const person = {
    name: 'julia',
    age: 20,
    phone: '0102123456',
};

//BAD Code 1
function displayPerson(person){
    diplayAvatar(person.name);
    diplayName(person.name);
    diplayProfile(person.name, person.age);
}

//BAD Code 2
function displayPersonBad(person){
    const name = person.name;
    const age = person.age;
    diplayAvatar(name);
    diplayName(name);
    diplayProfile(name, age);
}

//Good Code
function displayPersonGood(person){
    const { name , age } = person;
    diplayAvatar(name);
    diplayName(name);
    diplayProfile(name, age);
}

