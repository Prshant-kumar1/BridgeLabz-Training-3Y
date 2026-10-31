"use strict";

/**
 * Q4: Custom Form Builder
 * Dynamically builds HTML forms from field definition configurations
 * and extracts user form data upon submission.
 */

class FormBuilder {
    constructor(containerElement, fields) {
        this.container = containerElement;
        this.fields = fields;
        this.formId = "dynamic-form-" + Math.floor(Math.random() * 1000);
    }

    render() {
        let formHTML = `<form id="${this.formId}" class="dynamic-form">`;

        this.fields.forEach(field => {
            formHTML += `
                <div class="form-group" style="margin-bottom: 15px;">
                    <label style="display: block; font-weight: bold; margin-bottom: 5px;">${field.label}</label>
                    <input 
                        type="${field.type}" 
                        name="${field.name}" 
                        placeholder="${field.placeholder || ''}" 
                        style="padding: 8px; width: 100%; max-width: 300px; box-sizing: border-box;"
                    />
                </div>
            `;
        });

        formHTML += `<button type="submit" style="padding: 10px 20px; background-color: #007BFF; color: white; border: none; cursor: pointer;">Submit</button>`;
        formHTML += `</form>`;

        this.container.innerHTML = formHTML;
    }

    getFormData(formElement) {
        const formData = {};
        const inputs = formElement.querySelectorAll("input");

        inputs.forEach(input => {
            formData[input.name] = input.value;
        });

        return formData;
    }
}

const mockContainer = { innerHTML: "" };

const formConfig = [
    { type: 'text', label: 'Username', name: 'username', placeholder: 'Enter username' },
    { type: 'email', label: 'Email Address', name: 'email', placeholder: 'name@example.com' },
    { type: 'password', label: 'Password', name: 'password', placeholder: 'Enter secure password' }
];

const builder = new FormBuilder(mockContainer, formConfig);
builder.render();

console.log("=== Generated Form HTML Output ===");
console.log(mockContainer.innerHTML);

const mockFormElement = {
    querySelectorAll: () => [
        { name: 'username', value: 'coding_wizard' },
        { name: 'email', value: 'wizard@code.org' },
        { name: 'password', value: 'Secret123*' }
    ]
};

const submittedData = builder.getFormData(mockFormElement);
console.log("\nCaptured Form Data Object:", submittedData);
