class Ducktypium {
  constructor(arg) {
    this.validate(arg);
    this.color = arg;
    this.calibrationSequence = [];
  }
  refract(arg) {
    this.validate(arg);
    if (arg == this.color) return arg;
    if (((arg == 'red') && (this.color == 'blue')) || ((arg == 'blue') && (this.color == 'red'))) { return 'purple'; }
    if (((arg == 'red') && (this.color == 'yellow')) || ((arg == 'yellow') && (this.color == 'red'))) { return 'orange'; }
    if (((arg == 'blue') && (this.color == 'yellow')) || ((arg == 'yellow') && (this.color == 'blue'))) { return 'green'; }
  }
  calibrate(arg) {
    arg.sort();
    let by3 = arg.map(x => x * 3);
    this.calibrationSequence = by3;
  }
  validate(arg) {
    if (!(arg == 'red' || arg == 'blue' || arg == 'yellow')) {
      throw new Error(arg);
    }
  }
}

try {
  const badColor = new Ducktypium('pink');
} catch(e) {
  console.log('Color must be red, yellow, or blue!');
}

// Create a new instance of the class
const dt = new Ducktypium('red');

console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]

try {
  console.log(dt.refract('pink')); // throw error
} catch(e) {
  console.log('function error');
}
