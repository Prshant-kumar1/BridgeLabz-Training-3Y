// Q3: Monthly Expense Tracker

// Monthly expenses in rupees
const expenses = [
    { category: "Food", amount: 4500 },
    { category: "Travel", amount: 2000 },
    { category: "Rent", amount: 8000 },
    { category: "Bills", amount: 1500 },
    { category: "Leisure", amount: 1000 }
];

// Calculate the total of all expenses
let totalExpense = 0;

for (const expense of expenses) {
    totalExpense += expense.amount;
}

// Calculate the average expense per category
const averageExpense = totalExpense / expenses.length;

// Calculate 10% tax on the total expense
const taxRate = 0.10;
let taxAmount = totalExpense * taxRate;

// Add the tax to the total using an assignment operator
let finalExpense = totalExpense;
finalExpense += taxAmount;

// Display the results with two decimal places
console.log("MONTHLY EXPENSE REPORT");
console.table(expenses);

console.log(`Total Expense: Rs. ${totalExpense.toFixed(2)}`);
console.log(`Average Expense: Rs. ${averageExpense.toFixed(2)}`);
console.log(`Tax (10%): Rs. ${taxAmount.toFixed(2)}`);
console.log(`Final Expense with Tax: Rs. ${finalExpense.toFixed(2)}`);