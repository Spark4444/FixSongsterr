// Click Event listeners for popups
popupButtons.forEach((btn) => {
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
  updatePopupMoveUp();

  updateControlsBounds();
  if (currentBtn) {
    setTimeout(() => {
      updatePopupPosition();
    }, debounceTime);
  }
});
