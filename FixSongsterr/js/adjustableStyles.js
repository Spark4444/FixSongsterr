// The container that holds the main navigation buttons
const mainPanelContainer = document.querySelector("#tablist").parentElement;

// The inbox button in the top navigation; clicking opens the inbox popup
const inboxButton = document.querySelector("#menu-inbox");
let inboxPopupEl;

// Compute horizontal left offset (relative to the main panel) for the inbox popup
function computeInboxPopupLeft() {
  const inboxButtonRect = inboxButton.getBoundingClientRect();
  const inboxCenterX = inboxButtonRect.width / 2 + inboxButtonRect.x;

  const mainPanelRect = mainPanelContainer.getBoundingClientRect();
  const offsetFromMainPanel = inboxCenterX - mainPanelRect.x;

  const popupRect = inboxPopupEl.getBoundingClientRect();
  const leftOffset = offsetFromMainPanel - popupRect.width / 2;

  return leftOffset;
}

// Defer positioning until after the popup is created by other listeners
function positionInboxPopup() {
  setTimeout(() => {
    inboxPopupEl = document.querySelector("#inbox-popup");
    if (inboxPopupEl) {
      const popupLocation = computeInboxPopupLeft();
      inboxPopupEl.style.left = `${popupLocation}px`;
    }
  }, 0);
}

inboxButton.addEventListener(
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
