// The container that holds the main navigation buttons
const mainPanelEl = document.querySelector("#tablist").parentElement;

// The inbox button in the top navigation; clicking opens the inbox popup
const inboxBtn = document.querySelector("#menu-inbox");
let inboxPopupEl;

// Compute horizontal left offset (relative to the main panel) for the inbox popup
function computeInboxPopupLeft() {
  const btnRect = inboxBtn.getBoundingClientRect();
  const btnCenterX = btnRect.width / 2 + btnRect.x;

  const mainRect = mainPanelEl.getBoundingClientRect();
  const offsetFromMain = btnCenterX - mainRect.x;

  const popupRect = inboxPopupEl.getBoundingClientRect();
  const leftOffset = offsetFromMain - popupRect.width / 2;

  return leftOffset;
}

// Defer positioning until after the popup is created by other listeners
function positionInboxPopup() {
  setTimeout(() => {
    inboxPopupEl = document.querySelector("#inbox-popup");
    if (inboxPopupEl) {
      const popupLeft = computeInboxPopupLeft();
      inboxPopupEl.style.left = `${popupLeft}px`;
    }
  }, 0);
}

inboxBtn.addEventListener(
  "click",
  (e) => {
    positionInboxPopup();
  },
  false,
);

// Add resize listener that performs the same repositioning logic as the click listener
window.addEventListener(
  "resize",
  () => {
    positionInboxPopup();
  },
  false,
);
