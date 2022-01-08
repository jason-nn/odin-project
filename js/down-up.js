// recursion

const downup = (str) => {
  if (str.length === 1) {
    return str;
  } else {
    console.log(str);
    downup(str.slice(0, str.length - 1));
    console.log(str);
  }
};

downup('jason');
