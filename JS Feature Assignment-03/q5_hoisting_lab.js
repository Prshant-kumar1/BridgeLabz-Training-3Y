"use strict";

// Q5 – Hoisting Lab: The Sequence Trap

/*
 * --- PREDICTION & ANALYSIS OF ORIGINAL CODE ---
 * 
 * Original Snippet:
 * console.log(score);             // Line 1 -> Output: undefined
 * announce();                     // Line 2 -> Output: "Game started"
 * var score = 50;                 // Line 3
 * function announce() {           // Line 4
 *     console.log("Game started"); 
 * }
 * let status = "ready";           // Line 5
 * startGame();                    // Line 6 -> Output: "ready"
 * function startGame() {          // Line 7
 *     console.log(status); 
 * }
 * 
 * HOISTING MEMORY STATES BEFORE EXECUTION:
 * 1. `function announce()` & `function startGame()`: Fully hoisted with their full implementation.
 *    Available to call anywhere in the scope even before declaration.
 * 2. `var score`: Variable declaration hoisted to top of scope and initialized with `undefined`.
 *    Value assignment (50) happens at runtime on line 3.
 * 3. `let status`: Variable declaration hoisted, but placed in Temporal Dead Zone (TDZ).
 *    Accessing `status` before line 5 would throw a ReferenceError.
 */

console.log("========================================");
console.log("       HOISTING LAB - REFACTORED        ");
console.log("========================================\n");

// --- 1. REFACTORED CODE (Proper execution order & variable declarations) ---

// Declare variables at the top before usage
const score = 50;
const status = "ready";

// Function declarations
function announce() {
    console.log("Announcement: Game started");
}

function startGame() {
    console.log(`Status Check: ${status}`);
}

// Execute in logical sequence
console.log(`Score: ${score}`);
announce();
startGame();


console.log("\n----------------------------------------");
console.log("       REWRITTEN WITH ARROW FUNCTIONS   ");
console.log("----------------------------------------\n");

// --- 2. REWRITE USING ARROW FUNCTIONS ---
// Note: Arrow functions assigned to let/const variables are NOT hoisted like standard function declarations!
// They behave like variables and remain in TDZ until execution reaches their assignment line.

const scoreArrow = 50;
const statusArrow = "ready";

// Arrow functions must be defined BEFORE they are called
const announceArrow = () => {
    console.log("Arrow Announcement: Game started");
};

const startGameArrow = () => {
    console.log(`Arrow Status Check: ${statusArrow}`);
};

// Executing arrow functions
console.log(`Arrow Score: ${scoreArrow}`);
announceArrow();
startGameArrow();

/*
 * KEY HOISTING DIFFERENCES SUMMARY:
 * ---------------------------------------------------------------------------------
 * Feature               | Function Declaration        | Arrow Function (const/let)
 * ---------------------------------------------------------------------------------
 * Hoisting Behavior     | Fully hoisted (name + body) | Variable hoisted (TDZ)
 * Callable Before Def?  | YES                         | NO (ReferenceError)
 * ---------------------------------------------------------------------------------
 */
