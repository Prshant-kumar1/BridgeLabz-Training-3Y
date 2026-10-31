"use strict";

/**
 * Q2: Student Form Validator
 * Implements RegExp validation rules for Name, Email, Phone, and Password.
 */

class StudentFormValidator {
    constructor() {
        this.nameRegex = /^[A-Za-z\s]+$/;
        this.emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        this.phoneRegex = /^\d{10}$/;
        this.passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    }

    validateAll(formData) {
        const isNameValid = this.nameRegex.test(formData.name);
        const isEmailValid = this.emailRegex.test(formData.email);
        const isPhoneValid = this.phoneRegex.test(formData.phone);
        const isPasswordValid = this.passwordRegex.test(formData.password);

        console.log(`Validation Results for: ${formData.name}`);
        console.log(`- Name Valid (${formData.name}):`, isNameValid);
        console.log(`- Email Valid (${formData.email}):`, isEmailValid);
        console.log(`- Phone Valid (${formData.phone}):`, isPhoneValid);
        console.log(`- Password Valid:`, isPasswordValid);

        return isNameValid && isEmailValid && isPhoneValid && isPasswordValid;
    }
}

const validator = new StudentFormValidator();

const testStudent1 = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "9876543210",
    password: "Password@123"
};

const testStudent2 = {
    name: "Alice123",
    email: "alice.com",
    phone: "12345",
    password: "weak"
};

console.log("=== Testing Student 1 ===");
validator.validateAll(testStudent1);

console.log("\n=== Testing Student 2 ===");
validator.validateAll(testStudent2);
