interface Developers {
   name : string;
   skill: string;
}
interface Persons {
   name : string;
   age : number;
}

function intro ():Developers | Persons {
   return {name: "Tony", age:33, skill: "Iron Making"}
}

let tony = intro();
console.log(tony.name)

if((tony as Developers).skill) {
   let skill = (tony as Developers). skill
   console.log(skill)
}else if ((tony as Persons).age) {
   let skill = (tony as Persons).age;
   console.log(skill)
}

// 타입 가드 소개와 적용

// 타입 가드 정의
function isDeveloper(target : Developers | Persons):target is Developers {
   return (target as Developers).skill !== undefined;
}

if(isDeveloper(tony)){
   console.log(tony.skill)
}else {
   console.log(tony.age)
}






