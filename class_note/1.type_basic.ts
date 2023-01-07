// 문자열
let str:string = "hello";
let strings :string = "ian"
// 숫자
let num : number = 1;
let num_2 : number = 2;

// 배열
let array:number[] = [1,2,3];
let array2:Array<number> = [1,2,3]; // 배열 안에 넘버타입만 들어갈 수 있다고 명시함.

let array_2: number[] = [1,2,3]

// 튜플 - 배열의 특정 인덱스 특정 순서에서 순서의 타입까지 지정하는 것이 튜플
let address: [string, number] =["a",1];

// 객체
let obj:object = {};

// let person: object = {
//     name : "ian",
//     age: 100
// }

let person:{name: string, age:number} = {
    name: "thor",
    age: 1000
}
console.log(person)

// boolean
let show:boolean = true;

// 함수의 타입정의
(number:number):number => number*2