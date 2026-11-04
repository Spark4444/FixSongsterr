// Reusable function to observe element changes and update popup position
function observeElement(element) {
  console.log(element);
  if (element) {
    const observer = new MutationObserver(() => {
      if (currentBtn) {
        updatePopupPosition();
      }
    });

    observer.observe(element, {
      childList: true,
      subtree: true,
      attributes: true,
    });
  }
}

// Function to set up event listeners for popup buttons and observe popup layer changes
function setupListeners() {
  // Observe main popup layer
  observeElement(document.querySelector(".idrtTa_popupsLayer"));

  // Observe mixer container
  // Because songsterr are retards who split a single popup into a seperate container i have to now track it in a seperate observer
  observeElement(document.querySelectorAll(".tGl1ea_aboveBarRoot")[1]);

  // Click Event listeners for popups
  popupButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      updatePopupMoveUp();
      currentBtn = btn;
    });
  });
}

// Set everything up initially
setTimeout(() => {
  updateControlsBounds();
  selectPopupButtons();
  setupListeners();
}, 0);

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
    updatePopupMoveUp();
  }
});