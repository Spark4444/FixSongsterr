// Main bar with the buttons
let controlsLeft, controlsRight;

// Function to update the max bounds of the controls
function updateControlsBounds() {
  const controlsEl = document.querySelector("#controls");
  if (!controlsEl) return;
  
  const controlsRect = controlsEl.getBoundingClientRect();
  controlsLeft = controlsRect.left;
  controlsRight = controlsRect.left + controlsRect.width;
}
updateControlsBounds();

// Buttons with popups
let selectors = [
  "#mixer-button",
  "#c-speed",
  "c-tuning",
  "#c-transpose",
  "#c-metronome",
  "#c-export",
  "#c-print",
  "#c-settings",
];
let popupButtons = [];


function selectPopupButtons() {
  popupButtons = [];
  selectors.forEach((selector) => {
    let btn = document.querySelector(selector);
    if (btn) {
      popupButtons.push(btn);
    }
  });
}
selectPopupButtons();