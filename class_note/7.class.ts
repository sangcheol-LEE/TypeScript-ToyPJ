class User {
   private names : string;
   public age: number;
   readonly log : string;

   constructor(names:string ,age:number) {
      this.names = names;
      this.age = age;
   }
}

// const App = (title : string, deviceId: string):React.FC => {
//    return (
//       <div>Hello World</div>
//    )
// }