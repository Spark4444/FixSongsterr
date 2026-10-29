// Add resize listener that performs the same repositioning logic as the click listener
window.addEventListener(
  "resize",
  () => {
    positionInboxPopup();
  },
  false,
);
