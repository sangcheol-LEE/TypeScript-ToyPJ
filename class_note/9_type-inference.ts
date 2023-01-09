
// 타입 추론 기본 1
let b = "abc";

function getB(b = 10) {
   let c = "hello world";
   return b + c
}

// 인터페이스와 제네릭을 이용한 타입 추론 방식
// 타입 추론 기본 2
interface Dropdowns<T>{
   value : T;
   title : string;
}

let shoppinItemm: Dropdowns<string> = {
   value: "good",
   title: "ian"
}


// 타입 추론 기본 3
// 복잡한 구조에서의 타입 추론 방식

interface Drops<T>{
   value : T;
   title : string
}

interface Detailed<K> extends Drops<K>{
   description : string;
   tag : K
}

let detailedItem :Detailed<string> = {
   title :"abc",
   description: "ac",
   value : "goood",
   tag : "goooooood"

}


// 가장 적절한 타입..
// Best common Type
let firstArr = [1,2,true,true,"good" ];
let arrrs = ["0", 1 , null]
