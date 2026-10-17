// Main style overrides for desktop: center panels, prevent mobile-style dragging, and adjust popups
const css = `
/* Center main panel */
.Fdftiq_mainPanel {
  left: 50% !important;
  transform: translateX(-50%) !important;
  bottom: 10px !important;
  top: 96px !important;
}

/* Center the navigation menu (parent of #tablist) */
*:has(>#tablist) {
  top: 10px !important;
  bottom: unset !important;
  right: 0 !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
}

/* Hide draggable controls handle on desktop */
#controls-panel-handle {
    display: none;
}

/* Stretch controls panel to full width and remove mobile shadows */
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

/* Push main header down to make room for top navigation */
#header {
    margin: 60px 0 0 0;
}

/* Keep controls visible on scroll */
._5pcfpW_controlsTopPanelRow {
    visibility: visible !important;
    opacity: 1 !important;
    bottom: calc(var(--controls-top-panel-bottom) - 5px);
}

/* Prevent bottom controls from collapsing/being draggable */
.idrtTa_controls {
    max-height: unset !important;
    justify-content: space-around;
    border-radius: 20px;
    padding: 5px;
}

/* Restyle the video panel */
.oCvYpa_panel {
    border-radius: 20px;
    padding: 15px;
    background: #252529;
    margin: 0 0 10px 0;
}

/* Ensure parent of video panel is centered */
*:has(>.oCvYpa_panel) {
    width: var(--controls-panel-width);
}

/* Make controls card full width */
.idrtTa_controlsCard {
    width: 100%;
}

/* Move inbox popup to top area */
#inbox-popup {
    top: 60px !important;
    bottom: unset !important;
    max-height: unset !important;
}

/* Move revisions banner slightly down */
._8e144G_date {
    top: -6px;
}

/* Adjust help menu popup vertical position */
#help-menu {
    bottom: -165px !important;
}

/* Adjust profile popup vertical position */
#profile-popup-desktop {
    bottom: -101px !important;
}

/* Remove decorative connector line */
._6_NcWG_container:before {
    content: unset !important;
}

/* all the bottom popups move up and adjusted width */
.idrtTa_popupsLayer [role="dialog"], #metronome-popup {
    bottom: 70px !important;
    border-radius: 20px !important;
    max-height: calc(100vh - 80px) !important;
    width: 360px !important;
}

/* hide the songsterr logo to not obstruct instruments popup */
._9HBv-q_logoContainer {
    z-index: calc(var(--zIndexAdminPanel) - 4);
}

/* fix the bottom border radius of the speed popup */
.DhZNRW_popup{
    border-radius: 20px !important;
}

/* fix the saml button position of the metronome popup */
#metronome-settings {
    top: -6px;
}
`;