# Unexpected Type Coercion in JavaScript Arithmetic

This example demonstrates a common issue in JavaScript related to type coercion in arithmetic operations. JavaScript's dynamic typing can lead to unexpected results when numbers and strings are mixed in calculations.

The `bug.js` file shows a function `foo` that adds two arguments. When called with a number and a string, JavaScript implicitly converts the number to a string and performs string concatenation instead of numerical addition. The `bugSolution.js` file provides a solution to prevent this issue.