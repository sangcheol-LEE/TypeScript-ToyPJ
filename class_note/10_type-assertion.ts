// 타입 단언 !
let aa;
aa = 10;
aa = "10";
let bb = aa as string

// DOM API 조작
// <div id="app">h1</div>
let div = document.querySelector("div") as HTMLDivElement
if(div) {
   div.innerText = "Hello World";
}
