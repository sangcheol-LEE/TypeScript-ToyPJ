function logMessage (value: string | number):void {
    console.log(value)
}

logMessage("lee lee")
logMessage(123)

// 유니언 타입의 장점 및 특징
/*
    타입 가드에 용이하다.


*/

interface Dev {
    name : string;
    skill : string;
}

interface Per {
    name : string
    age: number
}

const askSomeUnion = (someone: Dev | Per):void => {
    someone.name // 공통된 속성만 사용 가능하다.
}

const askSomeInterSection = (someone: Dev & Per):void => {
    // 모든 속성갑 전부 사용 가능하다.
    someone.name
    someone.age
    someone.skill
}

/*
    유니온 타입과 인터섹션 타입의 차이점
*/
askSomeUnion({name : "ian", skill:"web"})
askSomeUnion({name : "iasn", age:1000})

askSomeInterSection({name : "ian", skill:"web", age : 1000})