// 인터페이스 호환
interface DeveloperX {
   name : string
   skill : string
}

class PersonX {
   name : string
}

let developer: DeveloperX;
let person: PersonX;
// developer = person;

// 함수
let add = function(a:number) {
}

let sum = function(a:number, b: number) {
}


sum = add; // non Error
// add = sum; // error

interface Empty<T>{

}

let empty1: Empty<string>
let empty2: Empty<number>

empty1 = empty2;
empty2 = empty1;



interface NotEmpty<T> {
   data : T
}

let notAmpty1 : NotEmpty<string>;
let notAmpty2 : NotEmpty<number>;

// notAmpty1 = notAmpty2;
// notAmpty2 = notAmpty1;