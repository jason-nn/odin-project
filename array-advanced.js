const foo = [
  { value: 8 },
  { value: 3 },
  { value: 4 },
  { value: 7 },
  { value: 6 },
  { value: 5 },
];

const filter = foo.filter((object) => object.value > 5);
console.log(filter);

const map = foo.map((object) => object.value * 2);
console.log(map);

const ordered = foo.sort((a, b) => {
  if (a.value > b.value) {
    // return greater than 0 means sort b before a
    return 1;
  } else {
    // return less than 0 means sort a before b
    return -1;
  }
});
console.log(ordered);

const orderedTwo = foo.sort((a, b) => a.value - b.value);
console.log(orderedTwo);

const total = foo.reduce((total, obj) => total + obj.value, 0);
console.log(total);

const vehicles = ['car', 'car', 'van', 'car', 'truck', 'truck', 'pogo stick'];

const transporation = vehicles.reduce((object, item) => {
  if (!object[item]) {
    object[item] = 0;
  }
  object[item]++;
  return object;
}, {});
console.log(transporation);
