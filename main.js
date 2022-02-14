class Counter{
    constructor( fCallback ){
        this.counter = 0;
        this.callback = fCallback;
    }

    increase( printChk ){
        this.counter++;
        console.log(this.counter);

        if( this.counter % 3 === 0 ){
            this.callback && this.callback( this.counter);
        }
    }
}

function alterNum(num){
    alert(`Wow ${num}`)
}

function print3rdSum(num){
    console.log(` Sum : ${num}`)
}

const coolCounter = new Counter();

//increase를 10회 반복 수행함.
for( let index = 0; index < 10 ; index++){
    
    if (index === 8) 
        coolCounter.increase( alterNum );
    else 
        coolCounter.increase( print3rdSum );
}

// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// count가 3씩 증가 할때 마다 따로 출력을 하고 싶다.

// 1. 일단 increase에 3씩 증가하는 부분에 대한 체크가 필요함
// 2. 그리고 그것을 출력하면됨.
// 3. 그런데 그렇게 할려면 별도의 함수를 던져서 출력이 되게 하도록 함수를
// 파람을 던지는 방법을 찾아보면 어때?
// 4. 그러고 그 결과 값을 리턴 받는 것이지.
