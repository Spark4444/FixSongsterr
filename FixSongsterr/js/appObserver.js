const app = document.querySelector("#app");

const w_eHuW_continueLink = document.querySelector(".w_eHuW_continueLink")

// observe changes in the app and wait for the continue link to appear and click it to remove the ad
const appObserver = new MutationObserver(() => {
  const continueLink = document.querySelector(".w_eHuW_continueLink");
  if (continueLink) {
    continueLink.querySelector("a").click();
  }

  // Adjust the position of the request original audio modal if it exists, its seperate from all the other bottom popups
  const requestOriginalAudioModal = document.querySelector("#request-original-audio-modal");
  if (requestOriginalAudioModal) {
    requestOriginalAudioModal.style.bottom = `${popupMoveUp}px`;
  }

  const reportAProblem = document.querySelector("[aria-label='Report a problem']");
  if (reportAProblem) {
    reportAProblem.style.bottom = `${popupMoveUp}px`;
  }
});

appObserver.observe(app, {
  childList: true,
  subtree: true,
});