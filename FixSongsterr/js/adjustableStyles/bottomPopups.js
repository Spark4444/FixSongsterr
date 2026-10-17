// Main bar with the buttons
const controlsEl = document.querySelector("#controls");
let controlsLeft, controlsRight;

// Function to update the max bounds of the controls
function updateControlsBounds() {
    let controlsRect = controlsEl.getBoundingClientRect();
    controlsLeft = controlsRect.left;
    controlsRight = controlsRect.left + controlsRect.width;
}
updateControlsBounds();

// Buttons with popups
let selectors = [
  "#mixer-button",
  "#c-speed",
  "#c-transpose",
  "#c-metronome",
  "#c-export",
  "#c-print",
  "#c-settings",
];
let popupButtons = [];
selectors.forEach(selector => {
    let btn = document.querySelector(selector);
    if (btn) {
        popupButtons.push(btn);
    }
});

// Move the buttons up
const popUpInitialPosition = 70;
let moveUpBtns = popUpInitialPosition;

let currentBtn;
const debounceTime = 100;

const btnMoveup = 59;
const btnInitialPosition = 54;

// Automatically check if the first button changed positions because of flex wrap, and the control element itself added by "btnMoveup"
function updateButtonsMoveUp() {
  // Check if the bottom buttons resize and became bigger by position
  let currentHeight = window.innerHeight - popupButtons[0].getBoundingClientRect().y;

  let multiplier = (currentHeight - btnInitialPosition) / btnMoveup;

  moveUpBtns = popUpInitialPosition + (btnMoveup * multiplier);
}
updateButtonsMoveUp();


// Compute the left position of the popup
function computePopupLeft(triggerEl, popupEl) {
    // Get button's center of the width
    const btnRect = triggerEl.getBoundingClientRect();
    const btnCenter = btnRect.left + btnRect.width / 2;

    // Get popup's center as well
    const popupRect = popupEl.getBoundingClientRect();
    const popupHalf = popupRect.width / 2;

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

// Function to update the position of the popup
function updatePopupPosition() {
    let popupEl = document.querySelector(".idrtTa_popupsLayer [role='dialog'], #metronome-popup");
    if (popupEl) {
        let left = computePopupLeft(currentBtn, popupEl);
        popupEl.style.setProperty("left", `${left}px`, "important");
        popupEl.style.setProperty("bottom", `${moveUpBtns}px`, "important");
    }
}

// Click Event listeners for popups
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
    // Update button bottom positions before computing the popup left
    updateButtonsMoveUp();

    updateControlsBounds();
    if (currentBtn) {
        setTimeout(() => {
            updatePopupPosition();
        }, debounceTime);
    }
});