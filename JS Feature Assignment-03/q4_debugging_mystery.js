"use strict";

// Q4 – Debugging Mystery

/*
 * --- ORIGINAL FAULTY CODE ANALYSIS ---
 * function showMessage() {
 *     greeting = "Welcome"; // Throws ReferenceError: greeting is not defined
 *     console.log(greeting);
 * }
 * showMessage();
 *
 * WHY IT FAILS IN STRICT MODE ("use strict"):
 * In non-strict mode, assigning a value to an undeclared variable (greeting = "Welcome") 
 * implicitly creates a global variable attached to the global object (window / globalThis).
 * In strict mode, implicit global creation is strictly prohibited to prevent accidental 
 * global namespace pollution and bugs. It immediately throws a ReferenceError.
 */

// --- FIXED CODE ---
function showMessage() {
    // Declaring 'greeting' locally using 'let' or 'const' resolves the issue.
    // Scope rules: 'greeting' is now block/function scoped strictly inside showMessage().
    const greeting = "Welcome"; 

    // Watch variable target in VS Code Debugger: Add 'greeting' to Watch panel
    console.log(`Message: ${greeting}`);
}

showMessage();

/*
 * DEBUGGER & CALL STACK OBSERVATIONS:
 * 1. Open this file in VS Code.
 * 2. Set a breakpoint on the line: `const greeting = "Welcome";`
 * 3. Start debugging (F5).
 * 4. CALL STACK PANEL:
 *    - Shows `showMessage` at the top of the stack frame.
 *    - Below it is `<anonymous>` (or global execution context).
 * 5. WATCH PANEL:
 *    - Add `greeting` to Watch. Before line execution, it displays `undefined` (or uninitialized).
 *    - Step over (F10) -> `greeting` updates to `"Welcome"`.
 */
