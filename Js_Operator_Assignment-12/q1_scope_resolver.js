// Q1: Scope Conflict Resolver

// Declare a global variable for bonus
let bonus = 5000;

/**
 * Calculates the total salary for an employee.
 * Demonstrates local variable scoping and access to global variables.
 * @param {boolean} isPermanent - Status determining if bonus applies
 */
function calculateSalary(isPermanent) {
    // Declare a local variable salary scoped strictly inside this function
    let salary = 40000;
    let totalSalary = salary;

    // Add the bonus only if local/parameter variable isPermanent is true
    if (isPermanent) {
        totalSalary += bonus; // Accessing the global variable 'bonus'
        console.log(`[Permanent Employee] Base: ${salary} + Bonus: ${bonus}`);
    } else {
        console.log(`[Contract Employee] Base: ${salary} (No Bonus applied)`);
    }

    console.log(`-> Total Salary inside function: ${totalSalary}\n`);
}

// Test cases demonstrating different values of isPermanent
console.log("--- Test Case 1: Permanent Employee ---");
calculateSalary(true);

console.log("--- Test Case 2: Contract Employee ---");
calculateSalary(false);

// Demonstrating scope boundaries: 
// Local variables ('salary', 'totalSalary') cannot be accessed outside the function.
try {
    console.log(salary); 
} catch (error) {
    console.log("Scope Isolation Check: 'salary' is not accessible globally.");
    console.log(`Error caught: ${error.message}`);
}
