function calculatePower(arg) {
  let multiply = arg.map(v => v * 2);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  if (multiply.length == 0) {return 0}
  const res = multiply.reduce(reducer);
  console.log(res);
  return res;
}

calculatePower([1, 3, 8]);
