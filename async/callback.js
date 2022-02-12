'use strict' ;

//JavaScript is synchronous.
// Execute the code block by orger after hoisting.
// hoisting: var function declaration

console.log('1');

setTimeout(function(){
    console.log('2');
},1000) ;
console.log('3');

// Synchronous callback
function printImmediately(print){
    print();
}

printImmediately( () => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}

printWithDelay(() => console.log('async Callback'), 2000);


//Callback Hell example
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout( () => {
            if(
                ( id === 'ellie' && password === 'dream') ||
                ( id === 'coder' && password === 'academy')
            ){
                onSuccess(id) ;
            } else {
                onError(new Error('Not found'))
            }
        } , 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout( () => {
            if( user === 'ellie') {
                onSuccess({name:'ellie', role:'admin'});
            } else {
                onError( new Error('no access') ) ;
            }
        } , 1000);
    }
}
console.clear();
const userStorage = new UserStorage();
const id = prompt('enter your id') ;
const password = prompt('enter your password');

userStorage.loginUser( 
    id, 
    password, 
    userId => {
        userStorage.getRoles( 
            userId
            , userWithRoles => {
                alert(`Hello ${userWithRoles.name}, you have a ${userWithRoles.role} role`);
            }
            , error =>{
                console.log(error);
            })
        
    }, 
    error => {
        console.log(error);
});

