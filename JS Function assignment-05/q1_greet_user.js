"use strict";

/**
 * Q1: Callback Flow Demonstration
 * Function greetUser accepts a name and a callback function.
 * It prints a greeting first, then invokes the callback.
 */

// Callback function to show the ending message
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Function accepting a name and a callback function
function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    
    // Demonstrate explicit callback execution flow
    if (typeof callback === "function") {
        callback();
    } else {
        console.log("Error: Expected a valid callback function.");
    }
}

// Demonstration
console.log("=== Q1: Callback Flow Execution ===");
greetUser("Alice", showEndMessage);
