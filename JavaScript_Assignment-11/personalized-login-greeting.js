// Q1: Personalized Login Greeting

const userName = "Prashant";

// Get the current hour (0–23)
const currentHour = new Date().getHours();

let greeting;

// Select a greeting based on the current time
if (currentHour < 12) {
    greeting = "Good Morning";
} else if (currentHour <= 17) {
    greeting = "Good Afternoon";
} else {
    greeting = "Good Evening";
}

// Use a template literal to display the greeting
console.log(`${greeting}, ${userName}! Welcome back.`);
console.log(`Current hour: ${currentHour}`);