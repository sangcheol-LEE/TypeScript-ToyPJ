interface Email<T> {
  value : T
  selected : boolean
}

const emails:Email<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];



const numberOfProducts:Email<number>[]  = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem<T>(item:Email<T>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProducts.forEach((product) => {
  const item = createDropdownItem<number>(product)
})

// 언제든지 value의 값이 변동될 수 있다는 가정..
// 어떤 타입이 오더라도 나는 좀 유연하게 제네릭을 통해 대응하겠다.
