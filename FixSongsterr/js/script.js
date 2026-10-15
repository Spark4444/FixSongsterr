const styleId = "fixsongsterrStyles";

const menuInbox = document.querySelector("#menu-inbox");
let inboxPopup;
const mainPanel = document.querySelector("#tablist").parentElement;

let popupToggle = false;

function getLocationOfPopup() {
    const inboxButtonRect = menuInbox.getBoundingClientRect();
    const inboxCenterX = inboxButtonRect.width / 2 + inboxButtonRect.x;

    const mainPanelRect = mainPanel.getBoundingClientRect();
    const offsetFromMainPanel = inboxCenterX - mainPanelRect.x;

    const popupRect = inboxPopup.getBoundingClientRect();
    const leftOffset = offsetFromMainPanel - popupRect.width / 2;

    return leftOffset;
}

menuInbox.addEventListener("click", (e) => {
    popupToggle = !popupToggle;

    // defer actual work until after all synchronous listeners have run
    setTimeout(() => {
      if (popupToggle) {
        inboxPopup = document.querySelector("#inbox-popup");
        const popupLocation = getLocationOfPopup();
        inboxPopup.style.left = `${popupLocation}px`;
      }
    }, 0);
}, false,);

// Main styles changes
// Fixes for the retarded new songsterr mobile like ui
const css = `
/* Center main panel */
.Fdftiq_mainPanel {
  left: 50% !important;
  transform: translateX(-50%) !important;
  bottom: 10px !important;
  top: 96px !important;
}

/* Navigation menu, the parent of tab list centered as well */
*:has(>#tablist) {
  top: 10px !important;
  bottom: unset !important;
  right: 0 !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
}

/* Remove controls panel handle, we're not using a fucking phone. why the fuck would you add a draggable menu on a desktop website */
#controls-panel-handle {
    display: none;
}

/* Controls panel, stretch it out instead of being on one side, so need to for the handle */
#controls {
    width: 97.5vw;
    padding: 10px 0;
    height: max-content;
    border-radius: 20px;
    right: 15px;
    align-items: flex-end;
    padding: 0 0 5px 0;
    background: none;
    box-shadow: none;
}

/* Move the main header down so that there's space for the top navigation */
#header {
    margin: 60px 0 0 0;
}

/* Prevent the controls from dissappearing on scroll */
._5pcfpW_controlsTopPanelRow {
    visibility: visible !important;
    opacity: 1 !important;
}

/* Prevent dragging and resize the bottom controls panel */
.idrtTa_controls {
    max-height: unset !important;
    justify-content: space-around;
    border-radius: 20px;
    padding: 5px;
}

/* restyle the video panel */
.oCvYpa_panel {
    border-radius: 20px;
    padding: 15px;
    background: #252529;
    margin: 0 0 10px 0;
}

/* Center the video panel parent */
*:has(>.oCvYpa_panel) {
    width: var(--controls-panel-width);
}

/* resize the bottom panel to be max width */
.idrtTa_controlsCard {
    width: 100%;
}

/* inbox popup moved to the top */
#inbox-popup {
    top: 60px !important;
    bottom: unset !important;
    max-height: unset !important;
}

/* move the banner for revisions down */
._8e144G_date {
    top: -6px;
}
`;

// Inject the styles into the head
const styleEl = document.createElement("style");
styleEl.id = styleId;
styleEl.type = "text/css";
styleEl.appendChild(document.createTextNode(css));
document.head.appendChild(styleEl);