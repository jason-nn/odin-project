// recursion

let downup = (str) => {
  if (str.length === 1) {
    return str;
  } else {
    console.log(str);
    downup(str.slice(0, str.length - 1));
    console.log(str);
  }
};

downup('jason');

console.log('---');

// iteration

downup = (str) => {
  for (let i = str.length; i > 0; i--) {
    console.log(str.slice(0, i));
  }
  for (let i = 2; i <= str.length; i++) {
    console.log(str.slice(0, i));
  }
};

downup('jason');
