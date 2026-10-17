const app = document.querySelector("#app");

const w_eHuW_continueLink = document.querySelector(".w_eHuW_continueLink")

// observe changes in the app and wait for the continue link to appear and click it to remove the ad
const appObserver = new MutationObserver(() => {
  const continueLink = document.querySelector(".w_eHuW_continueLink");
  if (continueLink) {
    continueLink.querySelector("a").click();
  }
});

appObserver.observe(app, {
  childList: true,
  subtree: true,
});