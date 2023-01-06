// es6

class Person {
   // 클래스 로직
   constructor(name, age) {
      console.log("생성 되었습니다.")
      this.name = name;
      this.age = age;
   }
}

let name = new Person("seho", 30);
console.log(name)

// 프로토 타입. 클래스를 사용하는 이유

