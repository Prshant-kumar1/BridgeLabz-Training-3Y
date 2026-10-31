"use strict";

// Q3 – Transaction Validator

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

console.log("========================================");
console.log("        TRANSACTION VALIDATOR           ");
console.log("========================================\n");

// Debugger breakpoint setup hint:
// Set a breakpoint on the line below inside VS Code or Browser DevTools to watch variable states.
for (let i = 0; i < transactions.length; i++) {
    const tx = transactions[i];

    // Breakpoint observation target: Inspect variable 'tx' and loop counter 'i' here
    try {
        // 1. Check for null/undefined entry
        if (!tx) {
            throw new Error("Null or undefined transaction record.");
        }

        // 2. Check for missing amount or id
        if (tx.id === undefined) {
            throw new Error("Missing transaction ID.");
        }
        if (tx.amount === undefined) {
            throw new Error(`Transaction ID ${tx.id}: Missing transaction amount.`);
        }

        // 3. Check for negative amount
        if (typeof tx.amount !== "number" || isNaN(tx.amount)) {
            throw new Error(`Transaction ID ${tx.id}: Amount is not a valid number.`);
        }
        if (tx.amount < 0) {
            throw new Error(`Transaction ID ${tx.id}: Negative transaction amount (${tx.amount}).`);
        }

        // If all checks pass, record as valid
        validTransactions.push(tx);
        console.log(`[SUCCESS] Transaction ID ${tx.id} processed successfully. Amount: $${tx.amount}`);

    } catch (err) {
        // Catch and categorize error type
        invalidTransactions.push({
            transaction: tx,
            index: i,
            errorMessage: err.message
        });
        console.log(`[FAILED]  Index ${i}: ${err.message}`);
    }
}

// Final summary report
console.log("\n----------------------------------------");
console.log("         TRANSACTION SUMMARY            ");
console.log("----------------------------------------");
console.log(`Total Processed : ${transactions.length}`);
console.log(`Successful (Valid)   : ${validTransactions.length}`);
console.log(`Failed (Invalid)     : ${invalidTransactions.length}`);
console.log("========================================\n");
