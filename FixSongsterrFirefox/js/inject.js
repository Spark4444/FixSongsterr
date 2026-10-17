// Inject custom fixes for the Songsterr desktop layout to fix mobile-like UI
const styleId = "fixsongsterrStyles";

// Inject the styles into the document head
const styleEl = document.createElement("style");
styleEl.id = styleId;
styleEl.type = "text/css";
styleEl.appendChild(document.createTextNode(css));
document.head.appendChild(styleEl);