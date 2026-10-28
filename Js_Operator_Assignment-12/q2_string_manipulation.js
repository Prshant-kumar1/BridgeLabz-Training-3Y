// Q2: String Manipulation Report

// Store the raw product name with extra spaces and mixed casing
let rawProductName = " wireless headphones PRO ";

console.log(`Original Raw Product Name: "${rawProductName}"`);
console.log("----------------------------------------");

// Step 1: Trim extra spaces and convert the entire string to lowercase
let trimmedLower = rawProductName.trim().toLowerCase();

// Step 2: Split into words, capitalize the first letter of each word using map(), then join back
let capitalizedTitle = trimmedLower
    .split(" ")                                    // Splits string into an array of words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(" ");                                    // Joins words back into a single string

// Step 3: Replace "pro" with "Pro Edition" using replace() and regex for case-insensitivity
let finalTitle = capitalizedTitle.replace(/pro/i, "Pro Edition");

// Step 4: Display the cleaned title and its length
console.log(`Cleaned Product Title: "${finalTitle}"`);
console.log(`Length of Cleaned Title: ${finalTitle.length} characters`);
