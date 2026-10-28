// Q3: Math Utility Dashboard

// Initial number for calculations
let x = 16.75;

// Perform math operations
let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x).toFixed(2);            // Formatted to 2 decimal places
let powerValue = Math.pow(x, 3).toFixed(2);          // x cubed
let randomNumber = Math.floor(Math.random() * 41) + 10; // Random number between 10 and 50 inclusive

// Display formatted result summary using template literals
let dashboardSummary = `
========================================
         MATH UTILITY DASHBOARD         
========================================
Input Number (x): ${x}
----------------------------------------
* Rounded Value (Math.round):    ${roundedValue}
* Square Root (Math.sqrt):       ${squareRoot}
* Cubed Power (Math.pow(x, 3)):  ${powerValue}
* Random Number (10 - 50):       ${randomNumber}
========================================
`;

console.log(dashboardSummary);
