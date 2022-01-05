username = prompt("Who's there?");

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
