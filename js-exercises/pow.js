function pow(base, exponent) {
  returnValue = base;

  for (let i = 0; i < exponent - 1; i++) {
    returnValue *= base;
  }

  return returnValue;
}

console.log(pow(4, 3));
