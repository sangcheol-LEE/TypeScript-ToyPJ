// 맵트 타입이란 기존에 정의 되어 있는 타입을 새로운 타입으로 변환해 주는 문법을 의미합니다.
// 마치 자바스크립트 map() API함수를 타입에 적용한 것과 같은 효과를 가집니다.

// 1. for in 이해하기
const arr:Array<string> = ["a","b","c"]
for(let key in arr) {
   console.log(key) // 0 1 2
   console.log(arr[key]) // "a" "b" "c"
}

type Heroes = "Hulk" | "Capt" | "Thor"
type HeroAges = {[K in Heroes] : number}
const ages:HeroAges = {
   Hulk: 33,
   Capt : 120,
   Thor : 1000
}

console.log(ages)