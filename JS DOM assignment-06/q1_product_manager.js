"use strict";

/**
 * Q1: Dynamic Product List Manager using Event Delegation
 * Supports adding, inline editing, auto-saving on outside clicks, and deletion.
 */

const productInput = document.getElementById("productInput");
const addProductBtn = document.getElementById("addProductBtn");
const productList = document.getElementById("productList");

addProductBtn.addEventListener("click", () => {
    const productName = productInput.value.trim();
    if (!productName) return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span class="product-name">\${productName}</span>
        <div class="actions">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;
    productList.appendChild(li);
    productInput.value = "";
});

productList.addEventListener("click", (event) => {
    const target = event.target;
    const li = target.closest("li");
    if (!li) return;

    if (target.classList.contains("delete-btn")) {
        li.remove();
    }

    if (target.classList.contains("edit-btn")) {
        const nameSpan = li.querySelector(".product-name");
        if (nameSpan) {
            const currentText = nameSpan.textContent;
            li.classList.add("editing");
            li.innerHTML = `
                <input type="text" class="edit-input" value="\${currentText}">
                <div class="actions">
                    <button class="save-btn">Save</button>
                </div>
            `;
            const editInput = li.querySelector(".edit-input");
            editInput.focus();
            editInput.setSelectionRange(editInput.value.length, editInput.value.length);
        }
    }

    if (target.classList.contains("save-btn")) {
        saveEdit(li);
    }
});

function saveEdit(li) {
    const editInput = li.querySelector(".edit-input");
    if (!editInput) return;

    const newName = editInput.value.trim() || "Untitled Product";
    li.classList.remove("editing");
    li.innerHTML = `
        <span class="product-name">\${newName}</span>
        <div class="actions">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;
}

document.addEventListener("click", (event) => {
    const activeEditingLi = productList.querySelector("li.editing");
    if (activeEditingLi && !activeEditingLi.contains(event.target)) {
        saveEdit(activeEditingLi);
    }
});