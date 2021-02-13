function calculateMass(arg) {
  let array1 =  arg.map(word => word.length);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  if (array1.length == 0) {return 0}
  const res = array1.reduce(reducer);
  console.log(res);
  return res;
}
//calculateMass(['dog', 'donkey', 'cat']);
//calculateMass(['cat', 'dog', 'bird']);
calculateMass([]);
