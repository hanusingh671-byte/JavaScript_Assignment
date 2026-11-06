// Name: Shubhankar Singh | ID: BCS2025390 | Assignment 12 | Task 1
function applyTwice(fn, value) {
  const result = fn(value);
  return fn(result);
}

function addTen(n) {
  return n + 10;
}

console.log(applyTwice(addTen, 5));
