"use strict";

/**
 * Q4: Constructor Functions & Prototype Method Sharing
 */

// Constructor Function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Adding prototype method to ensure method sharing across instances
Car.prototype.getDetails = function() {
    console.log(`Car Details: ${this.brand} ${this.model}`);
};

// Creating two distinct car instances
const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Tesla", "Model 3");

console.log("=== Q4: Prototype Method Sharing ===");
car1.getDetails(); // Output: Car Details: Toyota Camry
car2.getDetails(); // Output: Car Details: Tesla Model 3

// Verify method sharing (both objects reference the EXACT same function memory address)
console.log("
Are getDetails methods identical in memory?", car1.getDetails === car2.getDetails); // true
