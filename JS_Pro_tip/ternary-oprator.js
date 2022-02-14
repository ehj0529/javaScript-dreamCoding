// Ternary Operator
// BAD code

funtion getResult(score){
    let result;

    if(score > 5){
        result ='up';
    } else if (score <= 5){
        result ='down' ;
    }
    return result;
}

//Good Code

funtion getResultGood (score) {
    return score > 5 ? 'up' : 'dowm' ;
}