function getFirstAmountSorted(arg1, arg2) {
  arg1.sort();
  return arg1.slice(0,arg2);
}

console.log(getFirstAmountSorted(['third', 'second', 'first'], 2));
console.log(getFirstAmountSorted(['golden', 'terrier'], 1));
console.log(getFirstAmountSorted(['golden', 'terrier'], 1));
