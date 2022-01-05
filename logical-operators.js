let username = prompt("Who's there?");

if (username === 'Admin') {
  password = prompt("What's the magic word");
  if (password === 'TheMaster') {
    alert('Welcome');
  } else if (password.length) {
    alert('Wrong password');
  } else {
    alert('Canceled');
  }
} else if (username.length) {
  alert("I don't know you");
} else {
  alert('Canceled');
}

let jsname = prompt('What is the “official” name of JavaScript?');

if (jsname === 'ECMAScript') {
  alert('Right!');
} else {
  alert("You don't know? ECMAScript!");
}

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

message =
  login === 'Employee'
    ? 'Hello'
    : login === 'Director'
    ? 'Greetings'
    : login === ''
    ? 'No login'
    : '';
