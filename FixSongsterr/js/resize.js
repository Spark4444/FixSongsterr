// Add resize listener that performs the same repositioning logic as the click listener
window.addEventListener(
  "resize",
  () => {
    positionInboxPopup();
    positionPopup(".lokr4q_output", 398, 634);
  },
  false,
);
