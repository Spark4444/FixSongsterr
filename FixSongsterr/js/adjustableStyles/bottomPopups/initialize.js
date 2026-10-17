// Main bar with the buttons
const controlsEl = document.querySelector("#controls");
let controlsLeft, controlsRight;

// Function to update the max bounds of the controls
function updateControlsBounds() {
  if (!controlsEl) return;

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
selectors.forEach((selector) => {
  let btn = document.querySelector(selector);
  if (btn) {
    popupButtons.push(btn);
  }
});
