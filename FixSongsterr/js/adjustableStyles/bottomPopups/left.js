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
        popupEl.style.setProperty("bottom", `${popupMoveUp}px`, "important");
    }
}