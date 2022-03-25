const FooBar = (n) => {
  for (let i = 1; i < n + 1; i++) {
    if (i % 15 === 0) {
      console.log('FooBar');
    } else if (i % 3 === 0) {
      console.log('Foo');
    } else if (i % 5 === 0) {
      console.log('Bar');
    } else {
      console.log(i);
    }
  }
};

FooBar(15);
