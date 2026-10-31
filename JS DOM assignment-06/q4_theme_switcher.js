"use strict";

/**
 * Q4: Theme Switcher using Attribute Manipulation
 * Applies themes using setAttribute and manages body classes.
 */

const lightBtn = document.getElementById("lightThemeBtn");
const darkBtn = document.getElementById("darkThemeBtn");
const blueBtn = document.getElementById("blueThemeBtn");

function setTheme(themeName) {
    document.body.className = themeName;
    document.body.setAttribute("data-theme", themeName);
}

lightBtn.addEventListener("click", () => setTheme("light"));
darkBtn.addEventListener("click", () => setTheme("dark"));
blueBtn.addEventListener("click", () => setTheme("blue"));