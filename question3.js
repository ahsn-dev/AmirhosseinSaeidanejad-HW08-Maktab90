let count = 0;

function counterMaker() {
  return function increaseCount(numInput = 0) {
    count += numInput;
    return count;
  };
}

const counter = counterMaker();

console.log(counter()); // Output: 0
console.log(counter()); // Output: 0
console.log(counter(1)); // Output: 1
console.log(counter()); // Output: 1
console.log(counter(3)); // Output: 4
console.log(counter(7)); // Output: 11
console.log(counter(-5)); // Output: 6
