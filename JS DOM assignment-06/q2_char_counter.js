"use strict";

/**
 * Q2: Live Character Counter with Warning Behavior
 * Enforces a 100-character limit, changes styles dynamically, and blocks typing at limit.
 */

const MAX_LIMIT = 100;
const messageInput = document.getElementById("messageInput");
const counterDisplay = document.getElementById("counterDisplay");
const resetBtn = document.getElementById("resetBtn");

messageInput.addEventListener("keydown", (event) => {
    const currentLength = messageInput.value.length;
    const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "F5"];
    
    if (currentLength >= MAX_LIMIT && !allowedKeys.includes(event.key) && !event.ctrlKey && !event.metaKey) {
        event.preventDefault();
    }
});

messageInput.addEventListener("input", () => {
    const currentLength = messageInput.value.length;
    
    if (currentLength > MAX_LIMIT) {
        messageInput.value = messageInput.value.substring(0, MAX_LIMIT);
    }

    const remaining = MAX_LIMIT - messageInput.value.length;
    counterDisplay.textContent = `\${remaining} character\${remaining === 1 ? '' : 's'} remaining`;

    counterDisplay.className = "counter-display";
    if (remaining === 0) {
        counterDisplay.classList.add("danger");
    } else if (remaining <= 20) {
        counterDisplay.classList.add("warning");
    } else {
        counterDisplay.classList.add("normal");
    }
});

resetBtn.addEventListener("click", () => {
    messageInput.value = "";
    counterDisplay.textContent = `\${MAX_LIMIT} characters remaining`;
    counterDisplay.className = "counter-display normal";
    messageInput.focus();
});