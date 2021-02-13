const firstValue = process.argv[2].toLowerCase();
const secondValue = process.argv[3].toLowerCase();

if (firstValue > secondValue) {
  console.log(1);
} else if (firstValue < secondValue) {
  console.log(-1);
} else {
  console.log(0);
}

