'use strict' ;

//Callback Hell example
class UserStorage{
    loginUser(id, password){

        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                if(
                    ( id === 'ellie' && password === 'dream') ||
                    ( id === 'coder' && password === 'academy')
                ){
                    //onSuccess(id) ;
                    resolve(id);
                } else {
                    //onError(new Error('Not found'));
                    reject(new Error('ID Not found'));
                }
            } , 2000);
        });

    }

    getRoles(user) {
        return new Promise ( ( resolve, reject) => {
            setTimeout( () => {
                if( user === 'ellie') {
                    resolve({name:'ellie', role:'admin'});
                    //onSuccess({name:'ellie', role:'admin'});
                } else {
                    resolve( new Error('no access')) ;
                    //onError( new Error('no access') ) ;
                }
            } , 1000);    
        });
    }
}
console.clear();
const userStorage = new UserStorage();
const id = prompt('enter your id') ;
const password = prompt('enter your password');

userStorage.loginUser( id, password)
    .then(userId => userStorage.getRoles(userId) )
    //.catch( alert(`not found`) )
    .then( user => alert(`Hello ${user.name}, you have a ${user.role} role`) )
    //.catch( alert(`not access`) )
    .catch( console.log ) ;
 ;
    

/*
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
*/
