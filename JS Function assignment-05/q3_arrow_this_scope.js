"use strict";

/**
 * Q3: Arrow Functions vs. Regular Functions and `this` Binding
 */

// 1. Arrow Function Problem Demonstration
const userWithArrow = {
    name: "John Doe",
    showName: () => {
        // Arrow functions do NOT have their own `this` binding.
        // They lexically inherit `this` from the enclosing execution context (here, global/module scope).
        // In strict mode or module scope, `this.name` evaluates to undefined.
        console.log("Arrow Function output - this.name:", this?.name);
    }
};

console.log("=== Q3: Arrow Function vs Regular Function Scope ===");
console.log("Calling arrow function method:");
userWithArrow.showName(); 
// Explanation:
// Arrow functions do not bind their own `this`. Instead, `this` is lexically bound to the outer scope 
// where `userWithArrow` is defined (global/module object), where `name` does not exist on `this`.

// 2. Fix using a Regular Method / Normal Function
const userWithNormalFunction = {
    name: "John Doe",
    showName: function() {
        // Regular functions get their `this` bound dynamically based on how the function is invoked.
        // When called as `obj.method()`, `this` points to `obj`.
        console.log("Regular Function output - this.name:", this.name);
    }
};

console.log("
Calling fixed regular function method:");
userWithNormalFunction.showName(); // Output: "John Doe"
