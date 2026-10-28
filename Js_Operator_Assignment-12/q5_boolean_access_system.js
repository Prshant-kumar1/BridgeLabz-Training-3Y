// Q5: Boolean Logic Access System

/**
 * Evaluates smart home security status based on specified conditions.
 * Access is granted ("Secure") only if:
 * - Alarm is on
 * - Door and window are closed (locked)
 * - Owner is inside
 */
function evaluateSecuritySystem(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
    // Evaluate security conditions using logical operators (&&, etc.)
    let isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

    // Determine output status message
    let statusMessage = isSecure ? "Secure" : "Unsafe";

    console.log(`Conditions -> Door Locked: ${isDoorLocked}, Window Closed: ${isWindowClosed}, Alarm On: ${isAlarmOn}, Owner Inside: ${isOwnerInside}`);
    console.log(`System Status: ${statusMessage}\n`);

    return isSecure;
}

// Test multiple outcomes by changing values
console.log("--- Smart Home Security Testing ---");

// Test Case 1: All conditions met -> Expected: Secure
evaluateSecuritySystem(true, true, true, true);

// Test Case 2: Alarm is turned off -> Expected: Unsafe
evaluateSecuritySystem(true, true, false, true);

// Test Case 3: Door is left unlocked -> Expected: Unsafe
evaluateSecuritySystem(false, true, true, true);

// Test Case 4: Owner stepped outside -> Expected: Unsafe
evaluateSecuritySystem(true, true, true, false);
