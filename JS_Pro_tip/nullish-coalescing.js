// Nullish coalescing operator
// BAD Code

function printMessage(text){
    let message = text;
    if(text == null || text == undefined){
        message = 'Nothing to display ';
    }

    console.log(message ) ;
}

//GOOD code
//널또는 undifined을 체크 하는 방법.
function printMessageGood(text){
    const message = text ?? 'Nothing to display ^-^';
    console.log(message) ;
}

printMessageGood('Hello');
printMessageGood(undefined);
printMessageGood(null);

// parameter에 기본값을 설정 할수 있음
// 단!! null인경우는 빈값으로 체크 못하기 때문에 null이 출력이 됨.
// undefined 만 체크를 할수 있음.
function printMessageGood(text = '기본값 셋팅 '){
    const message = text ?? 'Nothing to display ^-^';
    console.log(message) ;
}


//추가 Logical OR oprator
//앞의 문장이 false로 리턴이 되면 무조건 두번째 문장이 출력이 됨.
// false 기준 : 0, null, undefined등....
//leftExpr || rightExpr
function printMessageOr( text ){
    const message = text || 'Nothing to display ^-^';
    console.log(message) ;
}

printMessageOr('Hello') ;// Hello가 출력됨.
printMessageOr(undifined) ; // Nothing 이 출력 
printMessageOr(null) ; // Nothing 이 출력 
printMessageOr(0) ; // Nothing 이 출력 
printMessageOr('') ; // Nothing 이 출력 


//Expr 이라서 오브젝트로 비교도 할수 있음.

const result = getInitialStatus() ?? fetchFromServer();
console.log(result) ;

function getInitialStatus(){
    return null;
}

function fetchFromServer(){
    return 'Hiya from  Server ~~' ;
}