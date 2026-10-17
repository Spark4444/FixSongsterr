// Function to set up event listeners for popup buttons and observe popup layer changes
function setupListeners() {
  const popupLayerEl = document.querySelector(".idrtTa_popupsLayer");

  if (popupLayerEl) {
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
  }

  // Click Event listeners for popups
  popupButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      updatePopupMoveUp();
      currentBtn = btn;
    });
  });
}
setupListeners();

let previousUrl = window.location.href;

// listener for URL changes to re-setup popup listeners on revision routes
window.addEventListener("popstate", () => {
  const currentUrl = window.location.href;

  // Check if url changed
  if (currentUrl !== previousUrl) {
    const splitUrl = currentUrl.split("/").filter(Boolean);
    // Check if the last part of the URL indicates a revision route, starts with "r"
    if (splitUrl[splitUrl.length - 1].startsWith("r")) {

      // Wait for other scripts to finish executing before setting up listeners
      setTimeout(() => {
        updateControlsBounds();
        selectPopupButtons();
        setupListeners();
      }, 0);
    }
  }

  previousUrl = currentUrl;
});

// Reposition popups on window resize and update controls bounds
window.addEventListener("resize", () => {
  // Update button bottom positions before computing the popup left

  updateControlsBounds();
  
  if (currentBtn) {
    updatePopupPosition();
  }
});