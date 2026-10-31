"use strict";

/**
 * Q1: E-Commerce Product Manager
 * Defines a Product class with methods for discounts and formatting details,
 * stores them in an array, and filters products priced above 1000.
 */

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percentage) {
        if (percentage > 0 && percentage <= 100) {
            this.price -= this.price * (percentage / 100);
        } else {
            console.log("Invalid discount percentage.");
        }
    }

    displayDetails() {
        return `[ID: ${this.id}] ${this.name} (${this.category}) - $${this.price.toFixed(2)}`;
    }
}

const products = [
    new Product(1, "Wireless Mouse", 850, "Electronics"),
    new Product(2, "Mechanical Keyboard", 1450, "Electronics"),
    new Product(3, "Standing Desk", 12000, "Furniture"),
    new Product(4, "USB-C Cable", 450, "Accessories"),
    new Product(5, "UltraWide Monitor", 25000, "Electronics")
];

console.log("=== All Products ===");
products.forEach(product => console.log(product.displayDetails()));

products[1].applyDiscount(10);

console.log("\n=== Products with Price > 1000 ===");
const expensiveProducts = products.filter(product => product.price > 1000);
expensiveProducts.forEach(product => console.log(product.displayDetails()));
