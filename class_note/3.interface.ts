
interface User {
   age: number;
   name: string;
}
// 변수의 인터페이스 활용
let seho : User = {
   age: 1,
   name : "sego"
}

console.log(seho)

// 함수의 인터페이스 활용
const capt ={
   name : "thor",
   age: 100
}

function getUser(user:User):void {
   console.log(user)
}

getUser(capt)

// 함수 구조를 정의하는 인터페이스
// 함수의 규칙을 정의할 때 유용하게 쓰인다 - 라이브러리를 만든다거나 협업 시 공용함수 사용 시
interface SumFunc {
   (a:number, b: number):number;
}

let subb :SumFunc;
subb = function(a:number, b:number):number {
   return a + b
}


// 인덱싱 방식을 정의하는 인터페이스
interface StringArray {
   [index: number] : string
}
let arrr:StringArray = ["a","b","c"];
arrr[0]

// 인터페이스 딕셔너리 패턴 - 실무에서 많이 쓰는 타입
interface StringRegexDictionary {
   [key: string] : RegExp;
}

let objf:StringRegexDictionary = {
   // sth : /abc/,
    cssFile: /\.css$/,
    jsFile:/\.js$/,
}

// Object.keys(obj).forEach((value) => ())

// 인터페이스 확장 (상속)
interface Person {
   name : string
   age: number
}

interface Developer extends Person{
   language: string;
}

let ian:Developer ={
   language: "JS",
   name: "ian",
   age: 27
}

console.log(ian)