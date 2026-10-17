// Main bar with the buttons
const controlsEl = document.querySelector("#controls");
let controlsLeft, controlsRight;

function updateControlsBounds() {
    let controlsRect = controlsEl.getBoundingClientRect();
    controlsLeft = controlsRect.left;
    controlsRight = controlsRect.left + controlsRect.width;
}
updateControlsBounds();

// Buttons with popups
const settingsBtn = document.querySelector("#c-settings");
const exportBtn = document.querySelector("#c-export");
const transposeBtn = document.querySelector("#c-transpose");
const speedBtn = document.querySelector("#c-speed");
const mixerBtn = document.querySelector("#mixer-button");
const popupButtons = [settingsBtn, exportBtn, transposeBtn, speedBtn, mixerBtn];

let currentBtn;
let debounceTime = 100;

// Compute the left position of the popup
function computePopupLeft(triggerEl, popupEl) {
    // Get button's center of the width
    let btnRect = triggerEl.getBoundingClientRect();
    let btnCenter = btnRect.left + btnRect.width / 2;

    // Get popup's center as well
    let popupRect = popupEl.getBoundingClientRect();
    let popupHalf = popupRect.width / 2;

    // Center the popup horizontally
    let leftPos = btnCenter - popupHalf;

    if (leftPos < controlsLeft) {
        leftPos = controlsLeft;
    } 

    let popupRight = leftPos + popupRect.width;
    if (popupRight > controlsRight) {
        leftPos = controlsRight - popupRect.width;
    }

    return leftPos;
}

function updatePopupPosition() {
    let popupEl = document.querySelector(".idrtTa_popupsLayer [role='dialog']");
    if (popupEl) {
        let left = computePopupLeft(currentBtn, popupEl);
        popupEl.style.left = `${left}px`;
    }
}

// Event listeners for popups
popupButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        setTimeout(() => {
            currentBtn = btn;

            updatePopupPosition();
        }, debounceTime);
    });
});

// Reposition popups on window resize and update controls bounds
window.addEventListener("resize", () => {
    updateControlsBounds();
    if (currentBtn) {
        setTimeout(() => {
            updatePopupPosition();
        }, debounceTime);
    }
});