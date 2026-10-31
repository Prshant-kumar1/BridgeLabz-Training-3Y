"use strict";

// Q2 – Employee Bonus Calculator

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" },
    // Test case with missing property / invalid data for error handling demonstration
    { name: "Alex", salary: "invalid", years: "3" }
];

console.log("========================================");
console.log("       EMPLOYEE BONUS CALCULATOR        ");
console.log("========================================\n");

// Process each employee record
employees.forEach((emp, index) => {
    try {
        // Validate presence of required properties
        if (!emp || emp.name === undefined || emp.salary === undefined || emp.years === undefined) {
            throw new Error(`Employee record at index ${index} is missing required properties.`);
        }

        // Convert salary and years to numbers explicitly
        const numSalary = Number(emp.salary);
        const numYears = Number(emp.years);

        // Check if conversions produced valid non-NaN numbers
        if (isNaN(numSalary) || isNaN(numYears)) {
            throw new Error(`Invalid numeric data for employee '${emp.name}'. Salary: '${emp.salary}', Years: '${emp.years}'`);
        }

        // Calculate bonus = (salary * 0.1) if years > 3 else (salary * 0.05)
        const bonusRate = numYears > 3 ? 0.10 : 0.05;
        const bonusAmount = numSalary * bonusRate;
        const totalPayout = numSalary + bonusAmount;

        // Print formatted summary using template strings
        console.log(`Employee #${index + 1}: ${emp.name}`);
        console.log(`  - Base Salary    : ₹${numSalary.toLocaleString()}`);
        console.log(`  - Experience     : ${numYears} year(s)`);
        console.log(`  - Bonus Rate     : ${bonusRate * 100}%`);
        console.log(`  - Bonus Amount   : ₹${bonusAmount.toLocaleString()}`);
        console.log(`  - Total Payout   : ₹${totalPayout.toLocaleString()}\n`);

    } catch (error) {
        // Debug observation & error handling
        console.error(`[ERROR] Processing Failed for Record #${index + 1}: ${error.message}\n`);
    }
});
