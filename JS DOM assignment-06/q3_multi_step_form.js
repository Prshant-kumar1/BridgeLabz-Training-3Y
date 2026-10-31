"use strict";

/**
 * Q3: Multi-Step Form with Next/Back navigation and strict field validations.
 */

let currentStep = 1;
const totalSteps = 3;

const steps = document.querySelectorAll(".step");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

const formData = { name: "", email: "", password: "" };

function validateCurrentStep() {
    if (currentStep === 1) {
        const nameInput = document.getElementById("name");
        const nameError = document.getElementById("nameError");
        const val = nameInput.value.trim();
        if (val.length < 2) {
            nameError.textContent = "Please enter a valid name (at least 2 chars).";
            return false;
        }
        nameError.textContent = "";
        formData.name = val;
        return true;
    } 
    else if (currentStep === 2) {
        const emailInput = document.getElementById("email");
        const emailError = document.getElementById("emailError");
        const val = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(val)) {
            emailError.textContent = "Please enter a valid email address (e.g. name@domain.com).";
            return false;
        }
        emailError.textContent = "";
        formData.email = val;
        return true;
    } 
    else if (currentStep === 3) {
        const passInput = document.getElementById("password");
        const passError = document.getElementById("passwordError");
        const val = passInput.value;
        if (val.length < 6) {
            passError.textContent = "Password must be at least 6 characters long.";
            return false;
        }
        passError.textContent = "";
        formData.password = val;
        return true;
    }
    return true;
}

function updateStepView() {
    steps.forEach((step) => {
        const stepNum = parseInt(step.getAttribute("data-step"));
        if (stepNum === currentStep) {
            step.classList.add("active");
        } else {
            step.classList.remove("active");
        }
    });

    backBtn.style.display = (currentStep > 1 && currentStep <= totalSteps) ? "inline-block" : "none";

    if (currentStep > totalSteps) {
        nextBtn.style.display = "none";
        backBtn.style.display = "none";
        renderSummary();
    } else {
        nextBtn.style.display = "inline-block";
        nextBtn.textContent = currentStep === totalSteps ? "Submit" : "Next";
    }
}

nextBtn.addEventListener("click", () => {
    if (validateCurrentStep()) {
        currentStep++;
        updateStepView();
    }
});

backBtn.addEventListener("click", () => {
    if (currentStep > 1) {
        currentStep--;
        updateStepView();
    }
});

function renderSummary() {
    const summaryContent = document.getElementById("summaryContent");
    summaryContent.innerHTML = `
        <p><strong>Name:</strong> \${formData.name}</p>
        <p><strong>Email:</strong> \${formData.email}</p>
        <p><strong>Password:</strong> ******** (Securely Stored)</p>
        <p style="color: green; font-weight: bold; margin-top: 15px;">Form submitted successfully!</p>
    `;
}