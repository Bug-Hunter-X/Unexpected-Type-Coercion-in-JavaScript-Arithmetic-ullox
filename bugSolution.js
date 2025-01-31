function foo(a, b) {
  // Type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Invalid input: Both arguments must be numbers";
  }
  return a + b;
}

console.log(foo(1, "1")); //Output: Invalid input: Both arguments must be numbers
console.log(foo(1, 1)); //Output: 2