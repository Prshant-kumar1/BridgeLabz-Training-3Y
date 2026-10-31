"use strict";

/**
 * Q2: Higher-Order Function with Array Callback Operations
 * Function applyOperation takes an array and a mapping callback,
 * returning a new array with the transformed values.
 */

function applyOperation(numbers, operation) {
    // Basic validation
    if (!Array.isArray(numbers) || typeof operation !== "function") {
        throw new TypeError("Invalid arguments passed to applyOperation.");
    }

    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(operation(numbers[i]));
    }
    return result;
}

// Target input array
const numbersList = [1, 2, 3, 4];

// Callback 1: Double the number
const double = (num) => num * 2;

// Callback 2: Square the number
const square = (num) => num * num;

// Demonstration
console.log("=== Q2: Higher-Order Array Callback Operations ===");
console.log("Original Array :", numbersList);

const doubledArray = applyOperation(numbersList, double);
console.log("Doubled Array  :", doubledArray);

const squaredArray = applyOperation(numbersList, square);
console.log("Squared Array  :", squaredArray);
