enum Shoes {
   Nike = "나이키" ,
   Adidas = '아디다스'
}

let myNikes = Shoes.Nike;

console.log(myNikes)

// 이넘 활용 사례
enum Answer {
   Yes = "Y",
   No = "N",
}


function askQ(answer: Answer) {
   if(answer === Answer.Yes) {
      console.log("정답 입니다.")
   }
   if(answer === Answer.No) {
      console.log("오답  입니다.")
   }
}

askQ(Answer.Yes)