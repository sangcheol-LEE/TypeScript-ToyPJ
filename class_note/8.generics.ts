// 타입을 마치 함수의 파라미터 처럼 받게 되는게 제네릭이다.

function logText(text)  {
   console.log(text)
   return text
}

logText("10"); // 숫자 10
logText("상철 짱짱맨"); // 문자열 하이
logText(true); // 불린값 트루

function logTexts<T>(text:T):T {
    console.log(text)
    return text
}

logTexts("Hello world ")
logTexts(1)
logTexts(true)

logTexts<string>("Hello world ")


// 제네릭이 의미하는 것은
// 암묵적으로 any값으로 타입이 할당되는데
// 만약 안에서 split을 사용하고 싶은데 문자열로 매개변수가 들어와야하는데


// 동일한 로직이지만 타입이 다른 값을 받고 싶을 때 함수를 여러개 만들어야 하는데.


function logTexx(text : string | number){

   // 유니온 타입은 두개의 타입이 공통적으로 사용할 수 있는 메서드만 제공해준다.

   // 타입을 정확하게 알 수 있어야만 메서드를 쓸 수 있다.
   // 반환값에 대한 해결이 해결되지 않아서 문제점들이 노출된다.
   console.log(text)
   text.toLocaleString()
   return text
}
const a = logTexx("hello")
// a.split()
logTexx("a")
logTexx(10)

// 제너릭을 통한 중복선언에 해결 책
// 제너릭의 장점과 타입추론에서의 이점

function logs<T>(text: T):T {
   console.log(text)
   return text
}

const asd = logs<string>("A")
asd.split("")
logs (10 )

// 실제로 함수를 정의할 때 타입을 비워놓은 상태에서 타입의 어떤 타입이 들어갈것이다를 호출하는 시점에 정의하는 것이 제네릭
// 타입의 추론을 해서 최종 리턴 값 까지 붙힐 수 있는 것이 제너릭 !


// 인터페이스에 제네릭을 선언하는 방법
interface DropDown {
   value : string
   selected : boolean
 }

 interface DropDown2<T> {
   value: T;
   selected : boolean
 }


 // 제너릭을 이용하여 얼마든지 타입을 변경 할 수 있다는 점
 interface Samples<T,Q> {
   num : T
   str: Q
 }

 const obj:Samples<number,string> = {num : 10,str : "strong"}





