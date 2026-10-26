// Main style overrides for desktop: center panels, prevent mobile-style dragging, and adjust popups
const css = `
._5pcfpW_controlsTopPanelRow {
    bottom: calc(var(--controls-top-panel-bottom) - 5px) !important;
    opacity: 1 !important;
    visibility: visible !important;
}

._6_NcWG_container:before, .idrtTa_sourceWrapper:before {
    content: unset !important;
}

._9HBv-q_logoContainer {
    z-index: calc(var(--zIndexAdminPanel) - 4) !important;
}

#controls {
    align-items: flex-end !important;
    background: none !important;
    box-shadow: none !important;
    height: max-content !important;
    padding: 0 0 5px 0 !important;
    right: 15px !important;
    width: 97.5vw !important;
}

#controls, .idrtTa_controls, .oCvYpa_panel, .idrtTa_popupsLayer [role="dialog"], #metronome-popup, .DhZNRW_popup, #panel-profile, #request-original-audio-modal, [aria-label="Report a problem"] {
    border-radius: 20px !important;
}

#controls-panel-handle {
    display: none !important;
}

*:has(>.oCvYpa_panel) {
    width: var(--controls-panel-width) !important;
}

*:has(>#tablist) {
    bottom: unset !important;
    right: unset;
    top: 10px !important;
    width: var(--panel-width);
}

#header {
    margin: 60px 0 0 0 !important;
}

#help-menu {
    bottom: -165px !important;
}

.idrtTa_controls {
    box-shadow: var(--popup-shadow) !important;
    justify-content: space-around !important;
    max-height: unset !important;
    padding: 10px 5px !important;
}

.idrtTa_controlsCard {
    width: 100% !important;
}

.idrtTa_popupsLayer [role="dialog"], #metronome-popup {
    width: 360px !important;
}

#inbox-popup {
    bottom: unset !important;
    max-height: unset !important;
    top: 60px !important;
}

.oCvYpa_panel {
    background: var(--controls-surface) !important;
    box-shadow: var(--popup-shadow) !important;
    margin: 0 0 10px 0 !important;
    padding: 15px !important;
}

#panel-favorites, #panel-search, #panel-account, #panel-help, #panel-newtab {
    bottom: 10px !important;
    top: 96px !important;
}

#panel-favorites, #panel-search, #panel-account, #panel-help, #panel-newtab, *:has(>#tablist) {
    left: 50% !important;
    transform: translateX(-50%) !important;
}

#panel-profile {
    bottom: 10px !important;
}

#profile-popup-desktop {
    bottom: -101px !important;
}

#Redesign_BTF_tab_page_320x50, #showroom, #showroom_header_desktop, #promo {
    display: none !important;
}

`;