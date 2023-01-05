// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var addresss = document.querySelector('#address');

// user data
var user = {};

function fetchUser(){
  return axios.get(url)
}
console.log("dd",fetchUser())

function startApp() {
  axios
    .get(url)
    .then(function (response) {
      console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user)
      username.innerText = user.name;
      email.innerText = user.email;
      addresss.innerText = `${user.address.city} ${user.address.street} ${user.address.suite} `
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
