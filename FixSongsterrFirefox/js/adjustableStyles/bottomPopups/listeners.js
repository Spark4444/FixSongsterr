const popupLayerEl = document.querySelector(".idrtTa_popupsLayer");

const popupLayerObserver = new MutationObserver(() => {
  if (currentBtn) {
    updatePopupPosition();
  }
});

popupLayerObserver.observe(popupLayerEl, {
  childList: true,
  subtree: true,
  attributes: true,
});

// Click Event listeners for popups
popupButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setTimeout(() => {
      currentBtn = btn;
      updatePopupPosition();
    }, 0);
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
    }, 0);
  }
});
