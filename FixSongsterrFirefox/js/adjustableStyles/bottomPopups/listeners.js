let popupLayerObserver;
let observedPopupLayerEl;

function setupListeners() {
  const popupLayerEl = document.querySelector(".idrtTa_popupsLayer");

  if (popupLayerObserver && observedPopupLayerEl !== popupLayerEl) {
    popupLayerObserver.disconnect();
    popupLayerObserver = null;
    observedPopupLayerEl = null;
  }

  if (popupLayerEl && !popupLayerObserver) {
    popupLayerObserver = new MutationObserver(() => {
      if (currentBtn) {
        updatePopupPosition();
      }
    });

    popupLayerObserver.observe(popupLayerEl, {
      childList: true,
      subtree: true,
      attributes: true,
    });
    observedPopupLayerEl = popupLayerEl;
  }

  // Click Event listeners for popups
  popupButtons.forEach((btn) => {
    if (btn.dataset.fixsongsterrPopupClickListener === "1") return;

    btn.dataset.fixsongsterrPopupClickListener = "1";
    btn.addEventListener("click", () => {
      currentBtn = btn;
    });
  });
}
setupListeners();

const urlChangeEventName = "fixsongsterr:urlchange";
let lastHandledUrl = window.location.href;

function isRevisionRoute(url) {
  const parsedUrl = new URL(url, window.location.origin);
  const pathParts = parsedUrl.pathname.split("/").filter(Boolean);
  const lastPathPart = pathParts[pathParts.length - 1] || "";
  return /^r/.test(lastPathPart);
}

function refreshPopupListenersOnUrlChange() {
  const currentUrl = window.location.href;
  if (currentUrl === lastHandledUrl) return;
  lastHandledUrl = currentUrl;

  if (!isRevisionRoute(currentUrl)) return;

  selectPopupButtons();
  if (currentBtn && !popupButtons.includes(currentBtn)) {
    currentBtn = null;
  }
  setupListeners();
}

function dispatchUrlChangeEvent() {
  window.dispatchEvent(new Event(urlChangeEventName));
}

if (!window.fixSongsterrUrlChangeListenerInstalled) {
  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;

  history.pushState = function () {
    const result = originalPushState.apply(this, arguments);
    dispatchUrlChangeEvent();
    return result;
  };

  history.replaceState = function () {
    const result = originalReplaceState.apply(this, arguments);
    dispatchUrlChangeEvent();
    return result;
  };

  window.addEventListener("popstate", dispatchUrlChangeEvent);
  window.addEventListener(urlChangeEventName, refreshPopupListenersOnUrlChange);
  window.fixSongsterrUrlChangeListenerInstalled = true;
}

// Reposition popups on window resize and update controls bounds
window.addEventListener("resize", () => {
  // Update button bottom positions before computing the popup left
  updatePopupMoveUp();

  updateControlsBounds();
  if (currentBtn) {
    updatePopupPosition();
  }
});
