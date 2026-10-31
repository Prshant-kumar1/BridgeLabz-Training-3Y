"use strict";

// Q1 – Dynamic Data Parser

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

// Arrays to store categorized data
const validNumbers = [];
const invalidEntries = [];

console.log("========================================");
console.log("        DYNAMIC DATA PARSER REPORT      ");
console.log("========================================\n");

// Iterate through the raw API data
for (let i = 0; i < apiData.length; i++) {
    const rawVal = apiData[i];

    // Explicit conversions
    const strVal = String(rawVal);
    const boolVal = Boolean(rawVal);
    
    // Convert to Number using Number()
    // Note: Number(" ") gives 0, Number(null) gives 0. 
    // We strictly check if trimmed string is non-empty and produces a non-NaN number.
    let numVal = Number(rawVal);

    // Validation logic for skipping invalid numbers ("NaN", " ", "100px", null, undefined)
    const isWhitespaceString = typeof rawVal === "string" && rawVal.trim() === "";
    const isInvalidNumber = isNaN(numVal) || isWhitespaceString || rawVal === null || rawVal === undefined;

    if (isInvalidNumber) {
        // Debug observation: Log invalid entry separately
        invalidEntries.push({
            index: i,
            rawValue: rawVal,
            stringForm: strVal,
            booleanForm: boolVal,
            reason: isNaN(numVal) 
                ? "Converts to NaN" 
                : isWhitespaceString 
                ? "Empty/Whitespace string" 
                : "Null/Undefined value"
        });
        console.log(`[INVALID ENTRY] Index ${i}: Raw = ${JSON.stringify(rawVal)} | Reason: ${invalidEntries[invalidEntries.length - 1].reason}`);
    } else {
        // Valid numeric entry
        validNumbers.push({
            index: i,
            rawValue: rawVal,
            numberForm: numVal,
            stringForm: strVal,
            booleanForm: boolVal
        });
        console.log(`[VALID ENTRY]   Index ${i}: Raw = ${JSON.stringify(rawVal)} -> Number: ${numVal}, String: "${strVal}", Boolean: ${boolVal}`);
    }
}

console.log("\n----------------------------------------");
console.log("              SUMMARY                   ");
console.log("----------------------------------------");
console.log(`Total Inputs Analyzed: ${apiData.length}`);
console.log(`Valid Numeric Data (${validNumbers.length}):`, validNumbers.map(e => e.numberForm));
console.log(`Invalid Entries    (${invalidEntries.length}):`, invalidEntries.map(e => JSON.stringify(e.rawValue)));
console.log("========================================\n");
