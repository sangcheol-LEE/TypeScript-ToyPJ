// 함수의 파라미터에 타입을 정의하는 방식
function sum(a:number, b:number) {
    return a + b
}

sum(10,20)

// 함수의 반환 값에 타입을 정의하는 방식

function added():number {
    return 10
}

added()

// 함수의 타입을 정의하는 방식

function total(a:number, b:number):number {
    return a + b
}

// 함수의 매개변수를 제한하는 방식
// total(10,20,30,40,50);

// 옵셔널 파라미터 (선택적 파라미터)
function log (a:string, b?: string, c?:string) {
    console.log("a :", a, "b : ", b, "c :", c)
}

log("ian","log")

