// The container that holds the main navigation buttons
const mainPanelEl = document.querySelector("#tablist").parentElement;

// The inbox button in the top navigation; clicking opens the inbox popup
const inboxBtn = document.querySelector("#menu-inbox");
let inboxPopupEl;

// Compute horizontal left offset (relative to the main panel) for the inbox popup
function computeInboxPopupLeft(inboxPopupEl) {
  const btnRect = inboxBtn.getBoundingClientRect();
  const btnCenterX = btnRect.width / 2 + btnRect.x;

  const mainRect = mainPanelEl.getBoundingClientRect();
  const offsetFromMain = btnCenterX - mainRect.x;

  const popupRect = inboxPopupEl.getBoundingClientRect();
  const leftOffset = offsetFromMain - popupRect.width / 2;

  return leftOffset;
}

// Compute the maximum height based on window height with configurable defaults and limits
function computeMaxHeight(defaultHeight, maxAllowedHeight) {
  const windowHeight = window.innerHeight;
  let adjustedHeight = defaultHeight;
  
  if (windowHeight < maxAllowedHeight) {
    const excessHeight = maxAllowedHeight - windowHeight;
    adjustedHeight -= excessHeight;
  }

  return adjustedHeight;
}

// Generic position function that applies max height and optional left positioning
function positionPopup(elementSelector, defaultHeight, maxAllowedHeight, computeLeft = false) {
  setTimeout(() => {
    const element = document.querySelector(elementSelector);
    if (element) {
      const maxHeight = computeMaxHeight(defaultHeight, maxAllowedHeight);
      element.style.maxHeight = `${maxHeight}px`;

      if (computeLeft) {
        const popupLeft = computeInboxPopupLeft(element);
        element.style.left = `${popupLeft}px`;
      }
    }
  }, 0);
}

// Defer positioning until after the popup is created by other listeners
function positionInboxPopup() {
  positionPopup("#inbox-popup", 476, 556, computeInboxPopupLeft);
}

if (inboxBtn) {
    inboxBtn.addEventListener(
    "click",
    (e) => {
      positionInboxPopup();
    },
    false,
  );
}
